import './Menu.css'
import {NavLink} from 'react-router-dom'
import {useEffect} from 'react'
import { useHistory } from "react-router-dom"

const Menu = ({setStartGame, isLogin}) => {
    let history = useHistory();
    useEffect(()=>{
        if(!isLogin){
            history.push('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="menu-wrapper" style={{backgroundImage: `url("/img/backgrounds/8.jpg")`}}>
            <div className="menu">
                <div className="link" onClick={setStartGame}>
                    <button>Start Game</button>
                </div>
                <div className="link">
                    <NavLink
                        to="/statistics"
                    >Statistics</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Menu
