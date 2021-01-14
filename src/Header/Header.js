import React from 'react'
import './Header.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { Link, useHistory } from 'react-router-dom';

function Header() {
    return (
        <div className="header">

            <div className="header__leftContainer">
                <Link to="/">
                    <img className="header__logo"
                        src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
                        alt=""
                    />
                </Link>
                
                <p className="header__greeting">Good afternoon</p>
            </div>

            <div className="header__rightContainer">
                <SearchOutlinedIcon
                    className="header__icons"
                    htmlColor="#7E7E7E"
                />
                <BookmarksOutlinedIcon
                    className="header__icons"
                    htmlColor="#7E7E7E"
                />
                <NotificationsNoneOutlinedIcon
                    className="header__icons"
                    htmlColor="#7E7E7E"
                />

                <Link to='/create' className="header__link">
                    <div className="header__createNew">
                            Create New
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__createNew">
                            Sign In
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
