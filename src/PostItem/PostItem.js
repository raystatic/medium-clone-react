import React, { useEffect, useRef } from 'react'
import ImageItem from '../ImageItem/ImageItem';
import './PostItem.css';

export const componentMappings = {
    img: (content, updateItem) => <ImageItem {...content} updateItem={updateItem}/>
}

function PostItem({type, content, updateItem, handleKeyPress}) {

    const textBox = useRef()

    useEffect(() => {
        if (!type) {
            textBox.current.focus()            
        }
    })

    return (
        <div className="postItem">
            {
                !type ? (
                    <textarea
                        className="postItem__input"
                        onKeyPress={handleKeyPress}
                        ref={textBox}
                        value={content}
                        onChange={(e) => updateItem(e.target.value)}
                    />
                ): componentMappings[type](content, updateItem)
            }
        </div>
    )
}

export default PostItem

