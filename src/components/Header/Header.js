import './Header.css'
import Timer from 'react-compound-timer'

const Header = ({score}) => (
    <header>
        <div className="score">
            <span className="avatar-border"><img src="/img/user.svg" alt="avatar-border"/></span>
            <span className="avatar"><img src="https://avatars.githubusercontent.com/u/45198847?v=4" alt="avatar"/></span>
            <span>DES:&nbsp;</span>
            <span className="score-count">{score}</span>
        </div>
        <div className="timer">Time <Timer.Minutes/>:<Timer.Seconds/></div>
    </header>
)

export default Header
