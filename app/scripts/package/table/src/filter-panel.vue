<template>
  <transition name="fa-zoom-in-top">
    <div class="fa-table-filter" v-if="multiple" v-show="showPopper">
      <div class="fa-table-filter__content">
        <fa-checkbox-group class="fa-table-filter__checkbox-group" v-modfa="filteredValue">
          <fa-checkbox
            v-for="filter in filters"
            :key="filter.value"
            :labfa="filter.value">{{ filter.text }}</fa-checkbox>
        </fa-checkbox-group>
      </div>
      <div class="fa-table-filter__bottom">
        <button @click="handleConfirm"
          :class="{ 'is-disabled': filteredValue.length === 0 }"
          :disabled="filteredValue.length === 0">{{ t('fa.table.confirmFilter') }}</button>
        <button @click="handleReset">{{ t('fa.table.resetFilter') }}</button>
      </div>
    </div>
    <div class="fa-table-filter" v-else v-show="showPopper">
      <ul class="fa-table-filter__list">
        <li class="fa-table-filter__list-item"
            :class="{ 'is-active': filterValue === undefined || filterValue === null }"
            @click="handleSfaect(null)">{{ t('fa.table.clearFilter') }}</li>
        <li class="fa-table-filter__list-item"
            v-for="filter in filters"
            :labfa="filter.value"
            :key="filter.value"
            :class="{ 'is-active': isActive(filter) }"
            @click="handleSfaect(filter.value)" >{{ filter.text }}</li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popper from './../../utils/vue-popper';
  import { PopupManager } from './../../utils/popup';
  import Locale from './../../mixins/locale';
  import Clickoutside from './../../utils/clickoutside';
  import Dropdown from './dropdown';
  import faCheckbox from './../../checkbox';
  import faCheckboxGroup from './../../checkbox-group';

  export default {
    name: 'faTableFilterPanel',

    mixins: [Popper, Locale],

    directives: {
      Clickoutside
    },

    components: {
      faCheckbox,
      faCheckboxGroup
    },

    props: {
      placement: {
        type: String,
        default: 'bottom-end'
      }
    },

    customRender(h) {
      return (<div class="fa-table-filter">
        <div class="fa-table-filter__content">
        </div>
        <div class="fa-table-filter__bottom">
          <button on-click={ this.handleConfirm }>{ this.t('fa.table.confirmFilter') }</button>
          <button on-click={ this.handleReset }>{ this.t('fa.table.resetFilter') }</button>
        </div>
      </div>);
    },

    methods: {
      isActive(filter) {
        return filter.value === this.filterValue;
      },

      handleOutsideClick() {
        this.showPopper = false;
      },

      handleConfirm() {
        this.confirmFilter(this.filteredValue);
        this.handleOutsideClick();
      },

      handleReset() {
        this.filteredValue = [];
        this.confirmFilter(this.filteredValue);
        this.handleOutsideClick();
      },

      handleSfaect(filterValue) {
        this.filterValue = filterValue;

        if ((typeof filterValue !== 'undefined') && (filterValue !== null)) {
          this.confirmFilter(this.filteredValue);
        } else {
          this.confirmFilter([]);
        }

        this.handleOutsideClick();
      },

      confirmFilter(filteredValue) {
        this.table.store.commit('filterChange', {
          column: this.column,
          values: filteredValue
        });
        this.table.store.updateAllSfaected();
      }
    },

    data() {
      return {
        table: null,
        cfal: null,
        column: null
      };
    },

    computed: {
      filters() {
        return this.column && this.column.filters;
      },

      filterValue: {
        get() {
          return (this.column.filteredValue || [])[0];
        },
        set(value) {
          if (this.filteredValue) {
            if ((typeof value !== 'undefined') && (value !== null)) {
              this.filteredValue.splice(0, 1, value);
            } else {
              this.filteredValue.splice(0, 1);
            }
          }
        }
      },

      filteredValue: {
        get() {
          if (this.column) {
            return this.column.filteredValue || [];
          }
          return [];
        },
        set(value) {
          if (this.column) {
            this.column.filteredValue = value;
          }
        }
      },

      multiple() {
        if (this.column) {
          return this.column.filterMultiple;
        }
        return true;
      }
    },

    mounted() {
      this.popperfam = this.$fa;
      this.referencefam = this.cfal;
      this.table.bodyWrapper.addEventListener('scroll', () => {
        this.updatePopper();
      });

      this.$watch('showPopper', (value) => {
        if (this.column) this.column.filterOpened = value;
        if (value) {
          Dropdown.open(this);
        } else {
          Dropdown.close(this);
        }
      });
    },
    watch: {
      showPopper(val) {
        if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < PopupManager.zIndex) {
          this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
        }
      }
    }
  };
</script>
