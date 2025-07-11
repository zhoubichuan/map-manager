import AMapLoader from "@amap/amap-jsapi-loader";
import { debounce } from "lodash-es";
import eventHub from './eventHub.js';
const securityJsCode = "8acfdd5ee47feef59e0877a80cdba123"
const key = "46c9ed4e2d25a0e0ee7c883fd5b1a0c8"
export let AMap = null
export let mouseTool = null
export let placeSearch = null
// 配置初始化
export const initConfig = async () => {
  window._AMapSecurityConfig = {
    securityJsCode,
  };
  AMap = await AMapLoader.load({
    key, // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale,AMap.HawkEye,AMap.ToolBar,AMap.ControlBar,AMap.PlaceSearch,AMap.DistrictSearch,AMap.HeatMap,AMap.3DTilesLayer,AMap.IndoorMap,AMap.MoveAnimation,AMap.ElasticMarker,AMap.MarkerCluster,AMap.IndexCluster,AMap.MouseTool,AMap.BezierCurveEditor,AMap.RectangleEditor,AMap.CircleEditor,AMap.EllipseEditor,AMap.GeoJSON,AMap.PolylineEditor,AMap.PolygonEditor,AMap.AutoComplete,AMap.Driving,AMap.Walking,AMap.Riding,AMap.Transfer,AMap.Geocoder,AMap.GraspRoad,AMap.StationSearch,AMap.LineSearch,AMap.ArrivalRange,AMap.CitySearch,AMap.Geolocation,AMap.Weather,AMap.RangingTool"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
  return AMap
}
// 地图初始化
export const initMap = ({ id, center }, mapData) => {
  const map = new AMap.Map(id, {
    zoom: 16,
    center,
    viewMode: "2D",
  });
  initMouseTool(AMap, map, mapData);
  initGeolocation(map)
  initSearch(map)
  map.on("complete", () => {
    eventHub.$emit('mapMounted', map)
  });
}
// 安全移除多边形
export const safeRemovePolygon = (fenceId: number, mapData) => {
  const polygon = mapData.mapInstances.get(fenceId);
  if (!polygon) return;

  try {
    polygon.setMap(null);
    mapData.map?.remove(polygon);
    mapData.mapInstances.delete(fenceId);
  } catch (error) {
    console.warn("多边形移除失败:", error);
  }
}

// 安全更新路径
const updatePolygonPath = (fence: any, mapData) => {
  const polygon = mapData.mapInstances.get(fence.gfid);
  if (!polygon) return;

  try {
    const currentPath = polygon.getPath().map((p: any) => [p.lng, p.lat]);
    if (JSON.stringify(currentPath) !== JSON.stringify(fence.path)) {
      polygon.setPath(fence.path);
    }
  } catch (error) {
    console.error("路径更新失败:", error);
    safeRemovePolygon(fence.gfid, mapData);
  }
}
// 安全更新地图实例
export const safeUpdateMapInstances = debounce(async (newVal: Array<Fence>, mapData, cb?) => {
  try {
    await mapData.mapInitPromise;
    if (!mapData.map || mapData.isClosing) return;
    const currentIds = newVal.map((f) => f.gfid);
    // 清理无效实例
    mapData.mapInstances.forEach((polygon, gfid) => {
      if (!currentIds.includes(gfid)) {
        safeRemovePolygon(gfid, mapData);
      }
    });
    // 批量更新
    newVal.forEach((fence) => {
      if (!mapData.mapInstances.has(fence.gfid)) {
        const polygon = createFence[fence.shape.radius ? 'circle' : 'polygon'](fence, mapData);
        if (polygon) mapData.mapInstances.set(fence.gfid, polygon);
      } else {
        updatePolygonPath(fence, mapData);
      }
    });
    cb && cb()
  } catch (error) {
    console.warn("地图更新中止:", error);
  }
}, 300)

// 验证围栏
export const validateFence = (fence: any, type) => {
  if (type === 'circle') {
    return true;
  } else {
    if (!fence.shape.points) return false;
    if (fence.shape.points.length < 3) {
      alert("无效的围栏路径");
      return false;
    }
    // 检查路径闭合
    const first = fence.shape.points[0];
    const last = fence.shape.points[fence.shape.points.length - 1];
    return first[0] === last[0] && first[1] === last[1];
  }
}

// 初始化鼠标工具
export const initMouseTool = (AMap: any, map, mapData) => {
  mouseTool = new AMap.MouseTool(map);
  mouseTool.on("draw", (event: any) => {
    drawEvents[event.obj.className.split('.')[1].toLowerCase()](event, mapData);
    eventHub.$emit('mapDrawStart', event);
  });
}
// 创建地图配置参数
export const createMap = {
  circle: (mapData) => {
    mapData.currentFence = {
      gfid: Date.now(),
      path: [],
      type: 'circle',
      shape: {
        radius: 0,
        center: []
      },
      status: "creating",
    };
    console.log(mapData.currentFence, 'mapData.currentFence')
    mouseTool.close(true);
    mouseTool.circle({
      strokeColor: "#FF33FF", // 边框颜色
      strokeOpacity: 1, // 边框透明度
      strokeWeight: 3, // 边框宽度
      fillColor: "#1791fc00", // 填充颜色
      fillOpacity: 0.2, // 填充透明度
    });
  },
  polygon: (mapData) => {
    mapData.currentFence = {
      gfid: Date.now(),
      type: 'polygon',
      shape: {
        points: '',
      },
      status: "creating",
    };
    mouseTool.close(true);
    mouseTool.polygon({
      strokeColor: "#FF33FF",
      fillColor: "#1791fc00", // 半透明填充
      strokeWeight: 2,
    });
  },
}
// 开始绘制地图
export const drawEvents = {
  circle: (event: any, mapData) => {
    if (!mapData.isCreating) return;
    const polygon = event.obj;
    const { lng, lat } = polygon.getCenter();
    const radius = polygon.getRadius();
    if (radius < 1) {
      // mouseTool?.close(true);
      alert("半径至少1米");
      return;
    }
    mapData.currentFence.shape.radius = radius
    mapData.currentFence.shape.center = [lng, lat];
    mouseTool.close(true);
  },
  polygon: (event: any, mapData) => {
    if (!mapData.isCreating) return;

    const polygon = event.obj;
    const path = polygon.getPath();

    if (path.length < 3) {
      // mouseTool?.close(true);
      alert("至少需要3个顶点来创建围栏");
      return;
    }
    // 自动闭合路径
    const firstPoint = path[0];
    const lastPoint = path[path.length - 1];
    if (firstPoint.distance(lastPoint) > 1e-6) {
      path.push(firstPoint);
    }
    mapData.currentFence.shape.points = path.map((p) => [p.lng, p.lat]);
    mouseTool.close(true);
  }
}
// 通过围栏数据创建围栏
const createFence = {
  circle: (fence: any, mapData) => {
    if (!mapData.map || !fence.shape.radius) return null;
    try {
      const polygon = new AMap.Circle({
        center: fence.shape.center.split(','),
        radius: Math.floor(fence.shape.radius),
        strokeColor: "#1791fc",
        fillColor: "#1791fc",
        strokeWeight: 4,
        fillOpacity: 0.4,
        extData: { gfid: fence.gfid }, // 添加扩展数据用于追踪
      });
      polygon.setMap(mapData.map);
      return polygon;
    } catch (error) {
      console.error("创建圆形失败:", error);
      return null;
    }
  },
  polygon: (fence: any, mapData) => {
    if (!mapData.map || !fence.shape.points) return null;
    try {
      const polygon = new AMap.Polygon({
        path: Array.isArray(fence.shape.points) ? fence.shape.points : fence.shape.points.split(';').map(i => i.split(',')),
        strokeColor: "#1791fc",
        fillColor: "#1791fc",
        strokeWeight: 4,
        fillOpacity: 0.4,
        extData: { gfid: fence.gfid }, // 添加扩展数据用于追踪
      });
      polygon.setMap(mapData.map);
      return polygon;
    } catch (error) {
      console.error("创建多边形失败:", error);
      return null;
    }
  },
}
export const closeEditor = async (mapData, fences) => {
  // 关闭编辑器前保存状态
  const finalPath = mapData.editor.getTarget?.().getPath();
  if (finalPath && mapData.editingFence?.gfid) {
    const index = fences.findIndex(
      (f) => f.gfid === mapData.editingFence?.gfid
    );
    if (index > -1) {
      fences[index].path = finalPath.map((p) => [p.lng, p.lat]);
    }
  }
  // 执行清理
  mapData.editor.off("adjust", mapData.currentAdjustCallback);
  mapData.editor.off("end", mapData.currentEndCallback);
  mapData.editor.close();
}
const initSearch = (map) => {
  const auto = new AMap.AutoComplete({
    input: "searchInputId",
  })
  placeSearch = new AMap.PlaceSearch({
    pageSize: 5, // 每页显示结果数量
    pageIndex: 1, // 当前页码
    city: "全国", // 搜索城市范围
    panel: "suggestionList",
    autoFitView: true,
    map: map
  })
  auto.on("select", function select(e) {
    placeSearch.search(e.poi.name, function (status, result) {
      //查询成功时，result 即对应匹配的 POI 信息
      console.log(result);
    });
  });
}
const initGeolocation = (map) => {
  const geolocation = new AMap.Geolocation({
    enableHighAccuracy: true, //是否使用高精度定位，默认:true
    timeout: 10000, //超过10秒后停止定位，默认：无穷大
    maximumAge: 0, //定位结果缓存0毫秒，默认：0
    convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    showButton: true, //显示定位按钮，默认：true
    buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
    buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
    showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
    panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
    zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    getCityWhenFail: true
  })

  geolocation.getCurrentPosition(function (status, result) {
    if (status == 'complete') {
      onComplete(result)
    } else {
      onError(result)
    }
  })

  function onComplete(data) {
    //具体的定位详情
  }

  function onError(data) {
    // 定位报错处理
  }
  map.addControl(geolocation)
}

export function getCenter(PolygonArr) {
  const total = PolygonArr.length;
  let X = 0; let Y = 0; let Z = 0;
  PolygonArr.forEach((lnglat: number[]) => {
    const lng = lnglat[0] * Math.PI / 180;
    const lat = lnglat[1] * Math.PI / 180;
    let x, y, z;
    x = Math.cos(lat) * Math.cos(lng);
    y = Math.cos(lat) * Math.sin(lng);
    z = Math.sin(lat);
    X += x;
    Y += y;
    Z += z;
  });
  X = X / total;
  Y = Y / total;
  Z = Z / total;

  const Lng = Math.atan2(Y, X);
  const Hyp = Math.sqrt(X * X + Y * Y);
  const Lat = Math.atan2(Z, Hyp);
  return [Lng * 180 / Math.PI, Lat * 180 / Math.PI];
}
