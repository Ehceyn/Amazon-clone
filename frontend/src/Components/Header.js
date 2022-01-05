import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

function Header(props) {
  const [{ basket }] = useStateValue();
  const [searchStyle, setSearchStyle] = useState({
    backgroundColor: "#cd9042",
    height: "34px",
    width: "34px",
    padding: "1px",
    fontSize: "100px",
  });
  const [shoppingBasketStyle, setShoppingBasketStyle] = useState({
    fontSize: "30px",
  });

  console.log(basket);

  useEffect(() => {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, handleResize);
    });
    return () => {
      ["load", "resize"].forEach((e) => {
        window.removeEventListener(e, handleResize);
      });
    };
  }, []);

  function handleResize() {
    if (window.matchMedia("(max-width: 545px)").matches) {
      setSearchStyle({
        backgroundColor: "#cd9042",
        height: "18px",
        width: "18px",
        padding: "1px",
        fontSize: "100px",
      });
      setShoppingBasketStyle({ fontSize: "100%" });
    } else {
      setSearchStyle({
        backgroundColor: "#cd9042",
        height: "33px",
        width: "33px",
        padding: "1px",
        fontSize: "100px",
      });
      setShoppingBasketStyle({ fontSize: "100%" });
    }
  }

  return (
    <nav id="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>

      {/* Search box */}
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" style={searchStyle} />
      </div>

      {/* 3 lines */}
      <div className="header-nav">
        {/* 1st Link */}
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Hello Meruz</span>
            <span className="header-optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th Link */}
        <Link to="/checkout" className="header-link">
          <div className="header-optionBasket">
            {/* shopping basket icon */}
            <ShoppingBasketIcon style={shoppingBasketStyle} />
            {/* number of items */}
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* Basket icon with number */}
    </nav>
  );
}

export default Header;
