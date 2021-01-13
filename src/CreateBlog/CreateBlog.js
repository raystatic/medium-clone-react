import React, { useState } from 'react'
import './CreateBlog.css'
import uuid from 'react-uuid'
import PostItem from '../PostItem/PostItem'
import Toolbar from '../Toolbar/Toolbar'


function CreateBlog() {

    const [items, setItems] = useState([{
        type:null,
        content:'',
        id: uuid()
    }])

    const addItem = (type, content) => {
        setItems(state => [...state, {type, content, id:uuid()}])
    }

    const updateItem = (id, newContent) => {
        setItems(state => {
            const itemIndex = state.findIndex(item => item.id === id)
            const newState = [...state]
            newState[itemIndex].content = newContent
            return newState
        })
    }

    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            addItem(null,'')
        }
    }

    return (
        <div className="createBlog">
            <h1>Create new blog</h1>
            {
                items.map(item => (
                    <PostItem
                        key={item.uuid}
                        type={item.type}
                        content={item.content}
                        updateItem = {(newContent) => updateItem(item.id, newContent)} 
                        handleKeyPress={handleKeyPress}
                    />
                ))
            }
            <Toolbar addItem={addItem}/>
        </div>
    )
}

export default CreateBlog
