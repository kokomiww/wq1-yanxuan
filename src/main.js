import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UI from '@/components/library'

// 1. 引入你需要的组件
import { Tag, ActionBar, ActionBarIcon, ActionBarButton, Tab, Tabs, Empty, NavBar, Button, Tabbar, TabbarItem, Swipe, SwipeItem, Notify, Icon, Form, Field, Popup, Area, Search, SidebarItem, Sidebar, Stepper, SwipeCell, Checkbox } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)
// 3. 注册你需要的组件
app.use(Tag).use(UI).use(Checkbox).use(SwipeCell).use(Stepper).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(Tab).use(Tabs).use(Empty).use(NavBar).use(SidebarItem).use(Sidebar).use(Search).use(Area).use(Popup).use(Form).use(Field).use(Icon).use(Notify).use(SwipeItem).use(Swipe).use(Button).use(Tabbar).use(TabbarItem).use(store).use(router).mount('#app')
