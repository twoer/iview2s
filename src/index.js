import xpage from './lib/components/xpage/index.vue';
import xcollapse from './lib/components/xcollapse/index.vue';
import shortcutDatepicker from './lib/components/shortcut-datepicker/index.vue';
const iview2s = {
    xpage, xcollapse, shortcutDatepicker
};
const install = function (Vue, opts = {}) {
    Vue.component(xpage.name, xpage);
    Vue.component(xcollapse.name, xcollapse);
    Vue.component(shortcutDatepicker.name, shortcutDatepicker);
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default Object.assign(iview2s, {install});
