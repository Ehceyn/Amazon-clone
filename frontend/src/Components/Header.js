import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "../StateProvider";


function Header(props) {

    const [{basket}]= useStateValue();
    console.log(basket);

    return (
        <nav id='header'>
            {/* logo on the left */}
            <Link to='/'>
                <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            </Link>

            {/* Search box */}
            <div className="header-search">
                <input type="text" className="header-searchInput"/>
                <SearchIcon className='header-searchIcon' />
            </div>

            {/* 3 lines */}
            <div className="header-nav">
                {/* 1st Link */}
                <Link to='/login' className="header-link">
                    <div className="header-option">
                        <span className='header-optionLineOne'>Hello Meruz</span>
                        <span className='header-optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to='/' className="header-link">
                    <div className="header-option">
                        <span className='header-optionLineOne'>Returns</span>
                        <span className='header-optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to='/' className="header-link">
                    <div className="header-option">
                        <span className='header-optionLineOne'>Your</span>
                        <span className='header-optionLineTwo'>Prime</span>
                    </div>
                </Link>

                {/* 4th Link */}
                <Link to='/checkout' className="header-link">
                    <div className="header-optionBasket">
                    {/* shopping basket icon */}
                        <ShoppingBasketIcon/>
                    {/* number of items */}
    <span className='header-optionLineTwo header-basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
            {/* Basket icon with number */}
        </nav>
    );
}

export default Header;