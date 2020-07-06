import {getPropByPath} from './../../../package/utils/util.js';
const getDefaultColumn = function(type, options) {
  const column = {};
  for (let name in options) {
    if (options.hasOwnProperty(name)) {
      const value = options[name];
      if (typeof value !== 'undefined') {
        column[name] = value;
      }
    }
  }

  if (!column.minWidth) {
    column.minWidth = 80;
  }

  column.realWidth = column.width === undefined ? column.minWidth : column.width;
  return column;
};
const DEFAULT_RENDER_CELL = function(h, { row, column }) {
    const property = column.prop;
    const value = property && getPropByPath(row, property).v;
    if (column && column.formatter) {
      return column.formatter(row, column, value);
    }
    return value;
};
export default {
    name:'vTableColumn',
    data(){
        return{

        }
    },
    props:{
        label:{
            type:String,
            default:''
        },
        prop:{
            type:String,
            default:'' 
        }
    },
    render(h){
        return (
           <div></div>
        )
    },
    created(){ 
        let column = getDefaultColumn('default',{
            label: this.label,
            prop:this.prop,
            renderCell:null
        });
        this.columnConfig = column;
        let renderCell = column.renderCell;
        let _self = this;
        column.renderCell = function(h, data) {
            if (_self.$scopedSlots.default){
                renderCell = () => _self.$scopedSlots.default(data);
            }

            if (!renderCell) {
                renderCell = DEFAULT_RENDER_CELL;
            }
            return <div class="cell">{ renderCell(h, data) }</div>;
        };
    },
    mounted(){
        this.$store.commit('insertColumn', this.columnConfig);
    }
}