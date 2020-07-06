export default {
    props:{
        data:[],
        columns:{
            type:Array,
            default:[]
        },
    },
    render(h){
       return(
            <tbody>
            {
                this._l(this.data,(row,$index)=>[
                    <tr class='fa-table__row'>
                        {
                            this._l(this.columns,(column, cellIndex)=>{
                                return (
                                    <td class='fa-table_1_column_2'>
                                        {
                                            column.renderCell.call(
                                                this._renderProxy,
                                                h,
                                                {
                                                row,
                                                column,
                                                $index
                                                }
                                            )
                                        }
                                    </td>
                                )
                            })
                        }
                    </tr>
                ])
            }
            </tbody>
       )
    }
}