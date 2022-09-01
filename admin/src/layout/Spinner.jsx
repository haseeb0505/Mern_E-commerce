/** @format */

import React from "react";


function Spinner() {
    return (
        <div>
            <img
                src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
                style={{
                    //width: "200px",
                    position: "absolute",
                    left: "45%",
                    top: "40%",
                }}
                alt='Loading...'
            />
        </div>
    );
}

export default Spinner;