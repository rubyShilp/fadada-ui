import './directives/core.js';
import './styles/index.less';
import Message from './message/index.js';
import Loading from './loading/index.js';
import locale from './locale/index.js';
import faPopover from './popover/index.js';
import faTooltip from './tooltip/index.js';
import faInput from './input/index.js';
import faSelect from './select/index.js';
import faCascader from './cascader/index.js';
import faOption from './option/index.js';
import faTag from './tag/index.js';
import faCard from './card/index.js';
import faRadio from './radio/index.js';
import faRadioButton from './radio-button/index.js';
import faRadioGroup from './radio-group/index.js';
import faCheckbox from './checkbox/index.js';
import faTable from './table/index.js';
import faTableColumn from './table-column/index.js';
import faCityPicker from './cityPicker/index.js';
import faDatePicker from './datePicker/index.js';
import faPage from './page/index.js';
import faScrollbar from './scrollbar/index.js';
import faButton from './button/index.js';
import faUpload from './upload/index.js';
import faProgress from './progress/index.js';
import faTree from './tree/index.js';
import faDocumentEdit from './documentEdit/index.js';
import faForm from './form/index.js';
import faFormItem from './form-item/index.js';
import faDropdown from './dropdown/index.js';
import faDropdownItem from './dropdownItem/index.js';
import faDropdownMenu from './dropdownMenu/index.js';
import faDialog from './dialog/index.js';
import faTab from './tabs/index.js';
import faTabPane from './tabPane/index.js';
import faTips from './tips/index.js';
import faRow from './layout/index.js';
import faCol from './layoutCol/index.js';
import faSteps from './steps/index.js';
import faStep from './step/idnex.js';
import faToggleButton from './toggleButton/index.js';
const components={
    faPopover,
    faTooltip,
    faTag,
    faInput,
    faSelect,
    faCascader,
    faOption,
    faCard,
    faRadio,
    faRadioButton,
    faRadioGroup,
    faCheckbox,
    faTable,
    faTableColumn,
    faCityPicker,
    faDatePicker,
    faPage,
    faScrollbar,
    faButton,
    faUpload,
    faProgress,
    faTree,
    faDocumentEdit,
    faForm,
    faFormItem,
    faDropdown,
    faDropdownMenu,
    faDropdownItem,
    faDialog,
    faTabPane,
    faTab,
    faTips,
    faRow,
    faCol,
    faSteps,
    faStep,
    faToggleButton
}
const install = function(Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);
    for (const name in components) {
        Vue.component(name, components[name])
    }
    Vue.prototype.$message = Message;
    Vue.prototype.$loading=Loading;
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
module.exports={
    version:'1.0.1',
    locale: locale.use,
    i18n: locale.i18n,
    install,
    faPopover,
    faTooltip,
    faTag,
    faInput,
    faSelect,
    faCascader,
    faOption,
    faCard,
    faRadio,
    faRadioButton,
    faRadioGroup,
    faCheckbox,
    faTable,
    faTableColumn,
    faCityPicker,
    faDatePicker,
    faPage,
    faScrollbar,
    faButton,
    faUpload,
    faProgress,
    faTree,
    faDocumentEdit,
    faForm,
    faFormItem,
    faDropdown,
    faDropdownMenu,
    faDropdownItem,
    faDialog,
    faTabPane,
    faTab,
    faTips,
    faRow,
    faCol,
    faSteps,
    faStep,
    faToggleButton
}
module.exports.default = module.exports;