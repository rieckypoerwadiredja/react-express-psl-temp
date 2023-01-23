import React from "react";

function User({data}) {

    return(
        <>
            {
                data.map((quote, idx) => (
                    <h1 key={idx}>{quote}</h1>
                ))
            }
        </>        
    )
}

export default User;