import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload";

export default function Login() {
    const [userInfo, setUserInfo] = useState({});
    const [res, setRes] = useState(null);
    const userRef = useRef();
    const passRef = useRef()
    // useEffect(()=>{

    // })
    const sendLogin = () => {
        setUserInfo({ user: userRef.current.value, pass: passRef.current.value })
        console.log('userinfo', userInfo)
    }
    useEffect(() => {
        if (userInfo.user) {
            fetch('/loginServer', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setRes(data.res)
                })
        }

    });
    // useEffect(() => console.log(userRef), [userRef])

    return (
        <>
            <h1>Please Log in</h1>
            <input ref={userRef} type="text" />
            <input ref={passRef} type="password" />
            <input onClick={sendLogin} type="button" value="send" />
            <h2>{res}</h2>
            {res === 'Welcome Riki' ?
                <div>
                    <Upload />
                </div>
                : null}
        </>

    )
}