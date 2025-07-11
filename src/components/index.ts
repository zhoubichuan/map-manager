import Pagination from './pagination/index'
import Layout from './layout/index'
import Autocomplete from './autocomplete/index'
import Dropdown from './dropdown/index'
import DropdownMenu from './dropdown-menu/index'
import DropdownItem from './dropdown-item/index'
import Menu from './menu/index'
import Submenu from './submenu/index'
import MenuItem from './menu-item/index'
import MenuItemGroup from './menu-item-group/index'
import Input from './input/index'
import InputButton from './input-button/index'
import InputMore from './input-more/index'
import InputNumber from './input-number/index'
import Radio from './radio/index'
import RadioGroup from './radio-group/index'
import RadioButton from './radio-button/index'
import Checkbox from './checkbox/index'
import CheckboxButton from './checkbox-button/index'
import CheckboxGroup from './checkbox-group/index'
import Switch from './switch/index'
import Select from './select/index'
import Option from './option/index'
import OptionGroup from './option-group/index'
import Button from './button/index'
import ButtonGroup from './button-group/index'
import Search from './search/index'
import Dialog from './dialog/index'
import DialogCreate from './dialog-create/index'
import DialogView from './dialog-view/index'
import Table from './table/index'
import WebTablePagination from './table-pagination/index'
import WebTableOperation from './table-operation/index'
// import TableColumn from './table-column/index'
import DatePicker from './date-picker/index'
import TimeSelect from './time-select/index'
import TimePicker from './time-picker/index'
// import Popover from './popover/index'
import Tooltip from './tooltip/index'
import MessageBox from './message-box/index'
import Breadcrumb from './breadcrumb/index'
import BreadcrumbItem from './breadcrumb-item/index'
import Form from './form/index'
import FormItem from './form-item/index'
import formSearch from './form-search/index'
import FormView from './form-view/index'
import Tabs from './tabs/index'
import TabPane from './tab-pane/index'
import Tag from './tag/index'
import Tree from './tree/index'
import Alert from './alert/index'
import WebNotification from './notification/index'
import Slider from './slider/index'
// import Loading from './loading/index'
import Icon from './icon/index'
import Row from './row/index'
import Col from './col/index'
import Upload from './upload/index'
import Progress from './progress/index'
import Spinner from './spinner/index'
// import Message from './message/index'
import Badge from './badge/index'
import Card from './card/index'
import Rate from './rate/index'
import Steps from './steps/index'
import Step from './step/index'
import Carousel from './carousel/index'
// import Scrollbar from './scrollbar/index'
import CarouselItem from './carousel-item/index'
import Collapse from './collapse/index'
import CollapseItem from './collapse-item/index'
import Cascader from './cascader/index'
import ColorPicker from './color-picker/index'
import Transfer from './transfer/index'
import WebTransferCascaderPanel from './transfer-cascader-panel/index'
import Container from './container/index'
import Header from './header/index'
import Aside from './aside/index'
import Main from './main/index'
import Footer from './footer/index'
import Timeline from './timeline/index'
import TimelineItem from './timeline-item/index'
import Link from './link/index'
import Divider from './divider/index'
import Image from './image/index'
import Calendar from './calendar/index'
import Backtop from './backtop/index'
import InfiniteScroll from './infinite-scroll/index'
import PageHeader from './page-header/index'
import CascaderPanel from './cascader-panel/index'
import Avatar from './avatar/index'
import Drawer from './drawer/index'
import Statistic from './statistic/index'
import Popconfirm from './popconfirm/index'
import Skeleton from './skeleton/index'
import SkeletonItem from './skeleton-item/index'
import Empty from './empty/index'
import Descriptions from './descriptions/index'
import DescriptionsItem from './descriptions-item/index'
import Result from './result/index'
import { App } from 'vue'

const components = [
  Pagination,
  Layout,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputButton,
  InputMore,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  Dialog,
  DialogCreate,
  DialogView,
  Slider,
  Search,
  ButtonGroup,
  Table,
  WebTablePagination,
  WebTableOperation,
  //   TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  //   Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  formSearch,
  FormView,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  //   Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  WebTransferCascaderPanel,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Statistic,
  Popconfirm,
  Skeleton,
  SkeletonItem,
  Empty,
  Descriptions,
  DescriptionsItem,
  Result
]

const install = function (app: App, opts = {}) {
  components.forEach(component => {
    app.component(component.name, component)
  })

  //   Vue.use(InfiniteScroll)
  //   Vue.use(Loading.directive)

  //   Vue.prototype.$ELEMENT = {
  //     size: opts.size || '',
  //     zIndex: opts.zIndex || 2000
  //   }

  //   Vue.prototype.$loading = Loading.service
  //   Vue.prototype.$msgbox = MessageBox
  //   Vue.prototype.$alert = MessageBox.alert
  //   Vue.prototype.$confirm = MessageBox.confirm
  //   Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$notify = WebNotification
  //   Vue.prototype.$message = Message
}

export default {
  version: '2.15.13',
  install,
  Layout,
  //   Loading,
  Pagination,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputButton,
  InputMore,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Dialog,
  DialogCreate,
  DialogView,
  Slider,
  Search,
  Table,
  WebTablePagination,
  WebTableOperation,
  //   TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  //   Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  formSearch,
  FormView,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  WebNotification,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  //   Message,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  //   Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  WebTransferCascaderPanel,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Statistic,
  Popconfirm,
  Skeleton,
  SkeletonItem,
  Empty,
  Descriptions,
  DescriptionsItem,
  Result
}
