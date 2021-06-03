import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import ReactDOM from "react-dom";

function Header() {
    return (<div className="header">
        <h1 className="logo">Logo</h1>
        <button type="button" className="btn-menu"><MenuIcon /></button>
        <div className="searchbar">
            <input className="search" placeholder="Search..."></input>

            <button type="submit" className="btn-search">Submit</button></div>
    </div>);
}
export default Header;