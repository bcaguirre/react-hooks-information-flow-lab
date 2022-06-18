import React from "react";

function Header({ onDarkModeClick }) {
    console.log(onDarkModeClick);
return (
    <button
    onClick={onDarkModeClick}
    />
);
}

export default Header;