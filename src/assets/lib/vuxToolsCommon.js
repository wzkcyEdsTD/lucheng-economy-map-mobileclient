import Vue from 'vue'
import {
  TransferDom,
  ToastPlugin,
  LoadingPlugin,
  AlertPlugin,
  Grid,
  GridItem,
  Box,
  Group,
  GroupTitle,
  Popup,
  Cell,
  CellBox,
  XButton,
  Actionsheet,
  XTextarea,
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  Flow,
  FlowState,
  FlowLine,
  CellFormPreview,
  Search,
  Checker, 
  CheckerItem,
  CheckIcon,
  Card
} from 'vux'

Vue.directive('transfer-dom', TransferDom)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('box', Box)
Vue.component('group', Group)
Vue.component('group-title', GroupTitle)
Vue.component('popup', Popup)
Vue.component('cell', Cell)
Vue.component('cell-box', CellBox)
Vue.component('x-button', XButton)
Vue.component('actionsheet', Actionsheet)
Vue.component('x-textarea', XTextarea)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('flow', Flow)
Vue.component('flow-state', FlowState)
Vue.component('flow-line', FlowLine)
Vue.component('cell-form-preview', CellFormPreview)
Vue.component('search', Search)
Vue.component('checker', Checker)
Vue.component('checker-item', CheckerItem)
Vue.component('check-icon', CheckIcon)
Vue.component('card', Card)

const common = {
  components: {
    
  },
  data: () => {
    return {
      
    }
  },
  methods: {
    
  },
  created() {},
}
export default common;