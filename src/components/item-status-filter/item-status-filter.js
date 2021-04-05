import React , {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
   
   buttonsProps = [
       {name:"all",label:"All"},
       {name:"active",label:"Active"},
       {name:"done",label:"Done"}
   ]


    render()  {
        const {filter,onFilterChange} = this.props,
               buttons = this.buttonsProps.map(({name,label}) => {
                    const isActive = filter === name,
                          clazz = isActive ? "btn btn-info" : "btn btn-outline-secondary"
                    return (
                        <button type="button"
                            className={clazz}
                             key = {name}
                             onClick = {() => onFilterChange(name)}
                             >{label}</button>
                    )
        })
        return (
                <div className="btn-group">
                    {buttons}
                </div>
                )
    }
}
