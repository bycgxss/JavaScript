let _Vue = null
export default class VueRouter {
  static install (Vue) {
    // 1.判断当前插件是否安装
    if (VueRouter.install.installed) return
    VueRouter.install.installed = true
    // 2.把Vue构造函数记录到全局变量中
    _Vue = Vue
    // 3.把创建Vue实例时候传入的router对象注入到Vue实例中
    _Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      },
    })
  }
  constructor(options) {
    this.options = options
    this.routeMap = {}
    this.data = _Vue.observable({
      current: '/',
    })
  }
  init () {
    this.initRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }
  initRouteMap () {
    // 遍历所有路由规则，把路由规则解析成键值对的形式，存储到routeMap中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component
    })
  }
  initComponents (Vue) {
    Vue.component('router-link', {
      props: { to: String },
      render (h) {
        return h('a', {
          attrs: { href: this.to },
          on: { click: this.handleClick }
        }, [this.$slots.default])
      },
      methods: {
        handleClick (e) {
          history.pushState({}, '', this.to)
          this.$router.data.current = this.to
          e.preventDefault()
        }
      }
    })
    const self = this
    Vue.component('router-view', {
      render (h) {
        const component = self.routeMap[self.data.current]
        return h(component)
      }
    })
  }
  initEvent () {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}
