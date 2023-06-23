import React, {useState} from "react";

export function GreetingHook() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <>
            <input value={firstName} onChange={(event) => setFirstName(event.target.value)}
                   placeholder="input first name"/>
                   <br/>
            <input value={lastName} onChange={(event) => setLastName(event.target.value)}
                   placeholder="input last name"/>
                   <div>
                       Hello <br/>
                       {firstName} {lastName}
                   </div>
        </>
    )
}