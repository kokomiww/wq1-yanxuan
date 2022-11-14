// vue插件 扩展vue功能 全局组件 指令 函数(vue3取消过滤器)
// 在main.js中导入，使用vue.use的时候就会执行install函数

// 引入组件
// import myChecked from './myChecked.vue'

// 导入library文件夹下的所有vue文件(组件)
// 批量导入 require.context(dir,deep,matching)
// 参数 1:目录 2:是否加载子目录 3:加载的正则匹配

const importFn = require.context('./', false, /\.vue$/)

export default {
    install(app) {
        // app.component(myChecked.name, myChecked)

        // 批量注册全局组件
        importFn.keys().forEach((key) => {
            // 导入组件
            // 得到组件对象
            const component = importFn(key).default
            // 注册组件
            app.component(component.name, component)
        })
    }
}