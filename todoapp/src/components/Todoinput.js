import React, { useState } from 'react';

function Todoinput(props) {
    const [inputText, setInputText] = useState('');
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(inputText);
            setInputText('');
        }
    }
    return (
        <div className='input-container'>
            <input type='text' placeholder="Add what you want to do"
                value={inputText} className='input-box-todo'
                onChange={e => {
                    setInputText(e.target.value);
                }}
                onKeyDown={handleEnterPress} />
            <button className='add-btn' onClick={() => {
                props.addList(inputText);
                setInputText('');
            }}>+</button>

        </div>
    )
}

export default Todoinput
