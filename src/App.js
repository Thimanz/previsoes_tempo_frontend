import React from "react";
import ButtonSearch from "./buttonSearch";

const App = () => {
    return (
        <>
            <div id="upper-page">
                <div id="main-menu">
                    <h1>Weather Forecast</h1>
                    <div id="buttons">
                        <ButtonSearch />
                        <button className="button">History</button>
                    </div>
                </div>
                <div id="contents"></div>
            </div>
            <div id="lower-page"></div>
        </>
    );
};

export default App;
