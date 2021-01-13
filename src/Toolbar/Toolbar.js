import React from 'react'
import './Toolbar.css'
import {componentMappings} from '../PostItem/PostItem'

function Toolbar({addItem}) {
    return (
        <div className="toolbar">
            {
                Object.keys(componentMappings).map(key=> (
                    <button className="toolbar__button" onClick={() => addItem(key, {})}>
                        {key}
                    </button>
                ))
            }
        </div>
    )
}

export default Toolbar
