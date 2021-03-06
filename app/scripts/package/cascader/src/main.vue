<template>
  <span
    class="fa-cascader"
    :class="[
      {
        'is-opened': menuVisible,
        'is-disabled': cascaderDisabled
      },
      cascaderSize ? 'fa-cascader--' + cascaderSize : ''
    ]"
    @click="handleClick"
    @mouseenter="inputHover = true"
    @focus="inputHover = true"
    @mouseleave="inputHover = false"
    @blur="inputHover = false"
    ref="reference"
    v-clickoutside="handleClickoutside"
    @keydown="handleKeydown"
  >
    <input type="text"  ref="input"
      :readonly="!filterable"
      :placeholder="currentLabels.length ? undefined : placeholder" :class="className"  v-model="inputValue" :validate-event="false" :disabled="cascaderDisabled"/>
    <i class="icon" :class="{'fa-icon-caret-bottom':!menuVisible,'fa-icon-caret-top':menuVisible}"></i>  
    <span class="fa-cascader__label" v-show="inputValue === ''">
      <template v-if="showAllLevels">
        <template v-for="(label, index) in currentLabels">
          {{ label }}
          <span v-if="index < currentLabels.length - 1" :key="index"> {{ separator }} </span>
        </template>
      </template>
      <template v-else>
        {{ currentLabels[currentLabels.length - 1] }}
      </template>
    </span>
  </span>
</template>
<script>
import Vue from 'vue';
import faCascaderMenu from './menu';
import Popper from './../../utils/vue-popper.js';
import Clickoutside from './../../utils/clickoutside.js'
import emitter from './../../mixins/emitter.js';
import Locale from './../../mixins/locale.js';
import { t } from './../../locale';
import {debounce} from 'throttle-debounce';
import { generateId } from './../../utils/util.js';

const popperMixin = {
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    appendToBody: Popper.props.appendToBody,
    arrowOffset: Popper.props.arrowOffset,
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding,
    popperOptions: Popper.props.popperOptions
  },
  methods: Popper.methods,
  data: Popper.data,
  beforeDestroy: Popper.beforeDestroy
};

export default {
  name: 'faCascader',

  directives: { Clickoutside },

  mixins: [popperMixin, emitter, Locale],

  inject: {
    faForm: {
      default: ''
    },
    faFormItem: {
      default: ''
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    props: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'label',
          value: 'value',
          disabled: 'disabled'
        };
      }
    },
    className:{
      type:String,
      default:''
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    separator: {
      type: String,
      default: '>>'
    },
    placeholder: {
      type: String,
      default() {
        return t('fa.cascader.placeholder');
      }
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: false
    },
    changeOnSelect: Boolean,
    popperClass: String,
    expandTrigger: {
      type: String,
      default: 'click'
    },
    filterable: Boolean,
    size: String,
    showAllLevels: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: () => (() => {})
    },
    hoverThreshold: {
      type: Number,
      default: 500
    }
  },

  data() {
    return {
      currentValue: this.value || [],
      menu: null,
      debouncedInputChange() {},
      menuVisible: false,
      inputHover: false,
      inputValue: '',
      flatOptions: null,
      id: generateId(),
      needFocus: true
    };
  },

  computed: {
    labelKey() {
      return this.props.label || 'label';
    },
    valueKey() {
      return this.props.value || 'value';
    },
    childrenKey() {
      return this.props.children || 'children';
    },
    disabledKey() {
      return this.props.disabled || 'disabled';
    },
    currentLabels() {
      let options = this.options;
      let labels = [];
      this.currentValue.forEach(value => {
        const targetOption = options && options.filter(option => option[this.valueKey] === value)[0];
        if (targetOption) {
          labels.push(targetOption[this.labelKey]);
          options = targetOption[this.childrenKey];
        }
      });
      return labels;
    },
    _faFormItemSize() {
      return (this.faFormItem || {}).faFormItemSize;
    },
    cascaderSize() {
      return this.size || this._faFormItemSize || (this.$ELEMENT || {}).size;
    },
    cascaderDisabled() {
      return this.disabled || (this.faForm || {}).disabled;
    }
  },

  watch: {
    menuVisible(value) {
      this.$refs.input.setAttribute('aria-expanded', value);
      value ? this.showMenu() : this.hideMenu();
    },
    value(value) {
      this.currentValue = value;
    },
    currentValue(value) {
      this.dispatch('faFormItem', 'el.form.change', [value]);
    },
    currentLabels(value) {
      const inputLabel = this.showAllLevels ? value.join('>>') : value[value.length - 1] ;
      this.$refs.input.setAttribute('value', inputLabel);
    },
    options: {
      deep: true,
      handler(value) {
        if (!this.menu) {
          this.initMenu();
        }
        this.flatOptions = this.flattenOptions(this.options);
        this.menu.options = value;
      }
    }
  },

  methods: {
    initMenu() {
      this.menu = new Vue(faCascaderMenu).$mount();
      this.menu.options = this.options;
      this.menu.props = this.props;
      this.menu.expandTrigger = this.expandTrigger;
      this.menu.changeOnSelect = this.changeOnSelect;
      this.menu.popperClass = this.popperClass;
      this.menu.hoverThreshold = this.hoverThreshold;
      this.popperElm = this.menu.$el;
      this.menu.$refs.menus[0].setAttribute('id', `cascader-menu-${this.id}`);
      this.menu.$on('pick', this.handlePick);
      this.menu.$on('activeItemChange', this.handleActiveItemChange);
      this.menu.$on('menuLeave', this.doDestroy);
      this.menu.$on('closeInside', this.handleClickoutside);
    },
    showMenu() {
      if (!this.menu) {
        this.initMenu();
      }

      this.menu.value = this.currentValue.slice(0);
      this.menu.visible = true;
      this.menu.options = this.options;
      this.$nextTick(_ => {
        this.updatePopper();
      });
    },
    hideMenu() {
      this.inputValue = '';
      this.menu.visible = false;
      if (this.needFocus) {
        //this.$refs.input.focus();
      } else {
        this.needFocus = true;
      }
    },
    handleActiveItemChange(value) {
      this.$nextTick(_ => {
        this.updatePopper();
      });
      this.$emit('active-item-change', value);
    },
    handleKeydown(e) {
      const keyCode = e.keyCode;
      if (keyCode === 13) {
        this.handleClick();
      } else if (keyCode === 40) { // down
        this.menuVisible = true; // 打开
        setTimeout(() => {
          const firstMenu = this.popperElm.querySelectorAll('.fa-cascader-menu')[0];
          firstMenu.querySelectorAll("[tabindex='-1']")[0].focus();
        });
        e.stopPropagation();
        e.preventDefault();
      } else if (keyCode === 27 || keyCode === 9) { // esc  tab
        this.inputValue = '';
        if (this.menu) this.menu.visible = false;
      }
    },
    handlePick(value, close = true) {
      this.currentValue = value;
      this.$emit('input', value);
      this.$emit('change', value);

      if (close) {
        this.menuVisible = false;
      } else {
        this.$nextTick(this.updatePopper);
      }
    },
    handleInputChange(value) {
      if (!this.menuVisible) return;
      const flatOptions = this.flatOptions;

      if (!value) {
        this.menu.options = this.options;
        this.$nextTick(this.updatePopper);
        return;
      }

      let filteredFlatOptions = flatOptions.filter(optionsStack => {
        return optionsStack.some(option => new RegExp(value, 'i').test(option[this.labelKey]));
      });

      if (filteredFlatOptions.length > 0) {
        filteredFlatOptions = filteredFlatOptions.map(optionStack => {
          return {
            __IS__FLAT__OPTIONS: true,
            value: optionStack.map(item => item[this.valueKey]),
            label: this.renderFilteredOptionLabel(value, optionStack),
            disabled: optionStack.some(item => item[this.disabledKey])
          };
        });
      } else {
        filteredFlatOptions = [{
          __IS__FLAT__OPTIONS: true,
          label: this.t('fa.cascader.noMatch'),
          value: '',
          disabled: true
        }];
      }
      this.menu.options = filteredFlatOptions;
      this.$nextTick(this.updatePopper);
    },
    renderFilteredOptionLabel(inputValue, optionsStack) {
      return optionsStack.map((option, index) => {
        const label = option[this.labelKey];
        const keywordIndex = label.toLowerCase().indexOf(inputValue.toLowerCase());
        const labelPart = label.slice(keywordIndex, inputValue.length + keywordIndex);
        const node = keywordIndex > -1 ? this.highlightKeyword(label, labelPart) : label;
        return index === 0 ? node : [' >> ', node];
      });
    },
    highlightKeyword(label, keyword) {
      const h = this._c;
      return label.split(keyword)
        .map((node, index) => index === 0 ? node : [
          h('span', { class: { 'fa-cascader-menu__item__keyword': true }}, [this._v(keyword)]),
          node
        ]);
    },
    flattenOptions(options, ancestor = []) {
      let flatOptions = [];
      options.forEach((option) => {
        const optionsStack = ancestor.concat(option);
        if (!option[this.childrenKey]) {
          flatOptions.push(optionsStack);
        } else {
          if (this.changeOnSelect) {
            flatOptions.push(optionsStack);
          }
          flatOptions = flatOptions.concat(this.flattenOptions(option[this.childrenKey], optionsStack));
        }
      });
      return flatOptions;
    },
    clearValue(ev) {
      ev.stopPropagation();
      this.handlePick([], true);
    },
    handleClickoutside(pickFinished = false) {
      if (this.menuVisible && !pickFinished) {
        this.needFocus = false;
      }
      this.menuVisible = false;
    },
    handleClick() {
      if (this.cascaderDisabled) return;
      //this.$refs.input.focus();
      if (this.filterable) {
        this.menuVisible = true;
        return;
      }
      this.menuVisible = !this.menuVisible;
    },
    handleFocus(event) {
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    }
  },

  created() {
    this.debouncedInputChange = debounce(this.debounce, value => {
      const before = this.beforeFilter(value);

      if (before && before.then) {
        this.menu.options = [{
          __IS__FLAT__OPTIONS: true,
          label: this.t('fa.cascader.loading'),
          value: '',
          disabled: true
        }];
        before
          .then(() => {
            this.$nextTick(() => {
              this.handleInputChange(value);
            });
          });
      } else if (before !== false) {
        this.$nextTick(() => {
          this.handleInputChange(value);
        });
      }
    });
  },

  mounted() {
    this.flatOptions = this.flattenOptions(this.options);
  }
};
</script>
