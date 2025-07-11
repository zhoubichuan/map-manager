import dayjs from 'dayjs'
export const Confit = {
  title: '',
  editWidth: '180',
  isEdit: true,
  needCreate: false,
  hasSelection:true,
  tableItems: [
    { prop: 'gfid', label: 'gfid', width: '90' },
    { prop: 'shape', label: '形状', width: '80', formatter: ({ shape }) => shape?.center ? '圆形' : '多边形' },
    { prop: 'name', label: '名称', width: '140' },
    { prop: 'desc', label: '描述' },
    { prop: 'createtime', label: '创建时间', formatter: ({ createtime }) => dayjs(createtime).format('YYYY-MM-DD hh:mm:ss'), width: '180' },
    { prop: 'modifytime', label: '更新时间', formatter: ({ modifytime }) => dayjs(modifytime).format('YYYY-MM-DD hh:mm:ss'), width: '180' },
  ]
}
