import wangeditor from './Editor.vue'
/* istanbul ignore next */
wangeditor.install = function (Vue) {
  Vue.component(wangeditor.name, wangeditor)
}

export default wangeditor