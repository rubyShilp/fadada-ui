import Focus from '../../mixins/focus.js';
import Migrating from '../../mixins/migrating.js';
export default {
    name: 'faToggleButton',
    mixins: [Focus('input'), Migrating],
    inject: {
        elForm: {
        default: ''
        }
    },
    props: {
        value: {
            type: [Boolean, String, Number],
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 40
        },
        activeIconClass: {
            type: String,
            default: ''
        },
        inactiveIconClass: {
            type: String,
            default: ''
        },
        activeText: String,
        inactiveText: String,
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        activeValue: {
            type: [Boolean, String, Number],
            default: true
        },
        inactiveValue: {
            type: [Boolean, String, Number],
            default: false
        },
        name: {
            type: String,
            default: ''
        },
        id: String
    },
    data() {
        return {
        coreWidth: this.width
        };
    },
    created() {
        if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
        this.$emit('input', this.inactiveValue);
        }
    },
    computed: {
        checked() {
        return this.value === this.activeValue;
        },
        switchDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
        }
    },
    watch: {
        checked() {
        this.$refs.input.checked = this.checked;
        if (this.activeColor || this.inactiveColor) {
            this.setBackgroundColor();
        }
        }
    },
    methods: {
        handleChange(event) {
        this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
        this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue);
        this.$nextTick(() => {
            // set input's checked property
            // in case parent refuses to change component's value
            this.$refs.input.checked = this.checked;
        });
        },
        setBackgroundColor() {
        let newColor = this.checked ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = newColor;
        this.$refs.core.style.backgroundColor = newColor;
        },
        switchValue() {
        !this.switchDisabled && this.handleChange();
        },
        getMigratingConfig() {
        return {
            props: {
            'on-color': 'on-color is renamed to active-color.',
            'off-color': 'off-color is renamed to inactive-color.',
            'on-text': 'on-text is renamed to active-text.',
            'off-text': 'off-text is renamed to inactive-text.',
            'on-value': 'on-value is renamed to active-value.',
            'off-value': 'off-value is renamed to inactive-value.',
            'on-icon-class': 'on-icon-class is renamed to active-icon-class.',
            'off-icon-class': 'off-icon-class is renamed to inactive-icon-class.'
            }
        };
        }
    },
    mounted() {
        /* istanbul ignore if */
        this.coreWidth = this.width || 40;
        if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
        }
        this.$refs.input.checked = this.checked;
    }
};