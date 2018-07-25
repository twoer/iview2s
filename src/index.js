import xpage from './lib/components/xpage/index.vue';
const iview2s = {
    xpage
};
const install = function (Vue, opts = {}) {
    Vue.component(xpage.name, xpage);
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default Object.assign(iview2s, {install});
