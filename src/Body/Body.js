import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Blog from '../Blog/Blog';
import Profile from '../Profile/Profile';
import './Body.css';

function Body() {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getBlogData = async() => {
            const response = await axios({
                method:'get',
                url:'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rahul9650ray'
            });
            console.log("response",response.data)
            setData(response.data);
            setIsLoading(false)
        }
        getBlogData()
    }, [data])

    return (

        <div className="body_main">
            <div className="body__profile">
                <Profile
                    imageUrl={data?.feed?.image}
                    description={data?.feed?.description}
                />
            </div>
            <div className="body__blog">
                {
                    data.items?.map(item=>(
                    <Blog 
                    title={item.title}
                    thumbnail={item.thumbnail} 
                    link={item.link}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default Body
