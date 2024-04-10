import React from 'react'
import PropTypes from 'prop-types'

function TodoList(props) {
    return (
        <div className='list-item'>
            {props.item}
            <span className='icons'>
                <i className="fa-solid fa-trash icon-delete" onClick={(e) => {
                    props.deleteItem(props.index);
                }}></i>
            </span>
        </div>
    )
}

TodoList.propTypes = {

}

export default TodoList

