import './Login.css'
import {useEffect} from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = (props) => {
    let history = useHistory();
    useEffect(() => {
        const url = window.location.href;
        const hasCode = url.includes("?code=");
        if (hasCode) {
            const newUrl = url.split("?code=");
            window.history.pushState({}, null, newUrl[0]);
            (async () => {
                let payload = {
                    code: newUrl[1],
                };
                let res = await axios.post('https://dzianiskor-react-game.herokuapp.com:5000/authenticate', payload);
                let data = res.data;
                props.setUser(data)
                props.setIsLogin()
                history.push('/')
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="login-wrapper" style={{backgroundImage: `url("/img/backgrounds/8.jpg")`}}>
            <a
               className="login-link"
               href={`https://github.com/login/oauth/authorize?scope=user&client_id=601317d4e6d41de68937&redirect_uri=https://dzianiskor-react-game.herokuapp.com/login`}
            >
                <button className='btn btn-primary btn-lg'>
                    <img src="/img/github.png" alt="cat"/>
                    <span>Login with GitHub</span>
                </button>
            </a>
        </div>
    )
}

export default Login
