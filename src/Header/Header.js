import React from 'react'
import './Header.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

function Header() {
    return (
        <div className="header">

            <div className="header__leftContainer">
                <img className="header__logo"
                    src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
                    alt=""
                />
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

                <div
                    className="header__createNew">
                    Create New
                </div>

                <img
                    src="https://miro.medium.com/fit/c/262/262/1*Yeazey3KkMEYji5rrI8SsQ.jpeg"
                    alt=""
                    className="header__profileImage"
                />

            </div>

        </div>
    )
}

export default Header
