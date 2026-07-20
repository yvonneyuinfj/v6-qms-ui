/* 平台按需加载组件 */
import {
  Layout,
  Menu,
  Row,
  Col,
  Card,
  Form,
  Dropdown,
  Select,
  Button,
  Checkbox,
  Tabs,
  Tag,
  Input,
  InputNumber,
  DatePicker,
  TimePicker,
  Radio,
  Tooltip,
  Space,
  Steps,
  Divider,
  Descriptions,
  Alert,
  Result,
  Statistic,
  Popconfirm,
  Popover,
  Table,
  Avatar,
  List,
  Progress,
  Switch,
  Modal,
  Rate,
  ConfigProvider,
  Empty,
  Spin,
  Drawer,
  PageHeader,
  Carousel,
  BackTop,
  Upload,
  Badge,
  Tree,
  Collapse,
  Calendar,
  Timeline,
  // TimelineItem,
  Slider,
  Step,
  Image,
  AutoComplete
} from 'ant-design-vue';
import { default as STable, setLicenseKey } from '@surely-vue/table';
import AvicIcon from '@/components/icon/index.vue';
// import SeniorSearch from '@/components/senior-search/index.vue';
import AvicModal from '@/components/modal/index.vue';
import AvicTreeSelect from '@/components/tree-select/AvicTreeSelect.vue';
import { ProProvider, PageContainer, TransformVnode } from '@/components';
import * as Icons from '@ant-design/icons-vue';
import AvicTable from '@/components/table/index.vue';
import AvicDictTag from '@/components/dict-tag/index.vue';
import AvicCommonSelect from '@/components/common-select/index.vue';
import AvicUploader from '@/components/file-upload/index.vue';
import AvicAutoCode from '@/components/auto-code/index';
import AvicExcelImport from '@/components/excel-import/index.vue';
import AvicModalSelect from '@/components/modal-select/index.vue';
import AvicRowEdit from '@/components/row-edit/index.vue';
import AvicBpmFilter from '@/components/bpm-filter/index.vue';
import { Splitpanes, Pane } from '@/components/split-panes/index';
import Viewer from 'v-viewer';
// surely-vue授权
setLicenseKey(
  // eslint-disable-next-line max-len
  '84c4ab3781ef44bbc82c858712d5b4c8T1JERVI6MTAwMDUxLEVYUElSWT00ODgxNTEzNjAwMDAwLERPTUFJTj1zdXJlbHkuY29vbCxVTFRJTUFURT0xLEtFWVZFUlNJT049MQ=='
);

export function registerComponents(app) {
  app
    .use(STable)
    .use(Layout)
    .use(Menu)
    .use(Row)
    .use(Col)
    .use(Card)
    .use(Form)
    .use(Dropdown)
    .use(Select)
    .use(Button)
    .use(Checkbox)
    .use(Tabs)
    .use(Tag)
    .use(Tree)
    .use(Input)
    .use(InputNumber)
    .use(DatePicker)
    .use(TimePicker)
    .use(Radio)
    .use(Tooltip)
    .use(Space)
    .use(Steps)
    .use(Divider)
    .use(Descriptions)
    .use(Alert)
    .use(Result)
    .use(Statistic)
    .use(Popconfirm)
    .use(Popover)
    .use(Table)
    .use(Avatar)
    .use(List)
    .use(Progress)
    .use(Switch)
    .use(Modal)
    .use(Rate)
    .use(ConfigProvider)
    .use(Empty)
    .use(Spin)
    .use(Drawer)
    .use(PageHeader)
    .use(Badge)
    .use(Carousel)
    .use(BackTop)
    .use(Upload)
    .use(ProProvider)
    .use(Collapse)
    .use(Viewer)
    .use(Calendar)
    .use(Timeline)
    // .use(TimelineItem)
    .use(Slider)
    .use(Step)
    .use(Image)
    .use(AutoComplete)
    .component('AvicIcon', AvicIcon)
    // .component('SeniorSearch', SeniorSearch)
    .component('AvicModal', AvicModal)
    .component('AvicTreeSelect', AvicTreeSelect)
    .component(PageContainer.name, PageContainer)
    .component(TransformVnode.name, TransformVnode)
    .component('AvicTable', AvicTable)
    .component('AvicDictTag', AvicDictTag)
    .component('AvicCommonSelect', AvicCommonSelect)
    .component('AvicUploader', AvicUploader)
    .component('AvicAutoCode', AvicAutoCode)
    .component('AvicExcelImport', AvicExcelImport)
    .component('AvicModalSelect', AvicModalSelect)
    .component('AvicRowEdit', AvicRowEdit)
    .component('AvicSplit', Splitpanes)
    .component('AvicPane', Pane)
    .component('AvicBpmFilter', AvicBpmFilter);
  // 全局使用图标，遍历引入
  const icons: any = Icons;
  Object.keys(icons).forEach(key => {
    // 平台默认仅挂载线条图标，实现和双色图标自行按需引入
    const svgName = icons[key].displayName;
    if (svgName && svgName.includes('Outlined')) {
      app.component(key, icons[key]);
    }
  });
}
