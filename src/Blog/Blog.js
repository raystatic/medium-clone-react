import React from 'react'
import './Blog.css';

function Blog({title, thumbnail, link}) {

    return (
        
        <div className="blog">
            <a 
                className="blog__title"
                href={link}
                >
                    {title}
            </a>
            <img
                src={thumbnail}
                alt=""
                className="blog__thumbmnail"
            />        
        </div>
    )
}

export default Blog
