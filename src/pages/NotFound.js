import React from "react";
import notFound from "../assets/notfound.jpg"

const NotFound = () => {
    return (
        <>
            <div>
                <img
                    alt="not-found"
                    src={notFound}
                    style={{
                        align: "center"
                    }}
                />
            </div>
        </>
    )
}


export default NotFound