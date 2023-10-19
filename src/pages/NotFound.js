import React from "react";
import notFound from "../assets/notfound.jpg"
import "../App.css"

const NotFound = () => {
    return (
        <>
            <div>
                <img className="not-found-image"
                    alt="not-found"
                    src={notFound}
                    data-testid="not-found-test"
                />
            </div>
        </>
    )
}


export default NotFound