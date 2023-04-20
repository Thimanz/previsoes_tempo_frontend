import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import * as $ from "jquery";
import Forecast from "./Forecast";

const InputSearch = () => {
    const [inputCity, setInputCity] = useState("");

    const changeHandler = (e) => {
        setInputCity(e.target.value);
    };

    const keyDownHandler = (e) => {
        if (e.key === "Enter") clickHandler();
    };

    const clickHandler = () => {
        const request = $.ajax({
            url: "http://localhost:8080/previsoes_tempo_maven/search",
            type: "GET",
            data: { city: inputCity },
            contentType: "application/json; charset=utf-8",
        });

        request.done(() => {
            const response = JSON.parse(request.responseText);

            const RenderLower = () => {
                //CONTINUAR
                const ref = useRef();
                useEffect(() => {
                    ref.current.scrollIntoView({ behavior: "smooth" });
                }, []);

                return <div ref={ref} id="forecasts"></div>;
            };

            ReactDOM.render(
                <RenderLower />,
                document.getElementById("lower-page")
            );

            ReactDOM.render(
                <Forecast response={response} />,
                document.getElementById("forecasts")
            );
        });
        request.fail(() => {
            console.log("failed to $.get");
        });
    };

    return (
        <div id="inputs">
            <input
                id="input-box"
                type="text"
                value={inputCity}
                onChange={changeHandler}
                onKeyDown={keyDownHandler}
                autoFocus
            />
            <input
                id="search-button"
                className="button"
                type="submit"
                onClick={clickHandler}
                value="Search"
            />
        </div>
    );
};

export default InputSearch;
