import React from "react";
import ReactDOM from "react-dom";
import InputSearch from "./InputSearch";

const ButtonSearch = () => {
    const clickHandler = () => {
        const AddSearchDiv = () => {
            return (
                <div id="search-menu">
                    <h2>Search any city's weather data</h2>
                    <InputSearch />
                </div>
            );
        };

        ReactDOM.render(<AddSearchDiv />, document.getElementById("contents"));
    };

    return (
        <button className="button" onClick={clickHandler}>
            Search
        </button>
    );
};

export default ButtonSearch;
