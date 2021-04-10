import React from 'react'
import HamburgerDrawer from './HamburgerDrawer'

const NavInshorts = () => {
    return (
        <div className="nav">
            <div className="icon">
                <HamburgerDrawer />
            </div>
            <img 
                className="logo" 
                src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
                alt="logo"
            />
        </div>
    )
}

export default NavInshorts
