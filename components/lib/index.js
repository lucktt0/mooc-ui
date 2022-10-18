// 添加整个组件库的install方法用于全部导入，否则用户需要按需引入各个组件
import Demo from './demo'
import Card from './card'

// 组件列表
const components = {
  Demo,
  Card
}

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
}
export default API
