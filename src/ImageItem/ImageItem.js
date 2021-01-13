import React, {useState} from 'react'
import './ImageItem.css';

function EditImage({updateItem}) {

    const [src, setSrc] = useState('')
    const [alt, setAlt] = useState('')

    const updateImageProperties = (e) => {
        updateItem({src, alt})
    }

    return (
        <div className="imageItem__createImage">
            <input placeholder="Add src" value={src} onChange={e => setSrc(e.target.value)}/>
            <input placeholder="Add alt" value={alt} onChange={e => setAlt(e.target.value)}/>  
            <button onClick={updateImageProperties}>Submit</button>  
        </div>
    )
}


function ImageItem({src, alt, updateItem}) {
    return (
        <div className="imageItem">
            {src && alt ? <img className="imageItem__image" src={src} alt={alt}/> : <EditImage updateItem={updateItem}/>}
        </div>
    )
}

export default ImageItem
