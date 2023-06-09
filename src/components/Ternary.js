import React from "react";

export default function Ternary(){
    const[messages,setMessages] = React.useState([]);

    function body(){
        return(
            <>
            {
                messages.length === 0 ?
                <h1>No messages</h1> :
                <h1>You have {messages.length}  unread {messages.length > 1 ? "messages" : "message"} </h1>
            }
            </>
        )
    }

    return(
        <>
            {body()}
        </>
    )
}