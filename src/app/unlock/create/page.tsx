// client component 指令
"use client"
import React from "react";

const UnlockCreateEvents:React.FC = ()=> {
    const handleCreate = () => {
        console.log("handleCreate");
    };
    return (
        <div>
            Unlock CreateEvent ??
            <div onClick={handleCreate}>
                Create Event
            </div>
        </div>
    )

}

export default UnlockCreateEvents;