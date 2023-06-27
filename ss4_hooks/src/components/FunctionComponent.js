import React, {useEffect, useState} from "react";

export function GreetingHook() {
    const [firstName, setFirstName] = useState(localStorage.getItem("firstName") || '');
    const [lastName, setLastName] = useState(localStorage.getItem("lastName") || '');

    useEffect(() => {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
    }, [firstName, lastName])
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