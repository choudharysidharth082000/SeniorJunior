import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import ReactDOM from "react-dom";

function Header() {
    return (
        <div className="headercontainor">
            <div className="header__logo">

                <p>Logo</p>

            </div>

            <div className="header__items">
                <div className="header__hamburger">


                </div>
                <div className="header__form">
                    <form type="submit" action="">
                        <input className="header__form__input" type="text" placeholder="Search" />
                        <button className="header__form__button">Submit</button>
                    </form>

                </div>
            
            </div>

        </div>
    );
}
export default Header;