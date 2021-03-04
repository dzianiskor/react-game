import './Header.css'
import Timer from 'react-compound-timer'

const Header = ({score, user}) => (
    <header>
        <div className="score">
            <span className="avatar-border"><img src="/img/user.svg" alt="avatar-border"/></span>
            <span className="avatar"><img src={user.avatar} alt="avatar"/></span>
            <span>{user.login}:&nbsp;</span>
            <span className="score-count">{score}</span>
        </div>
        <div className="timer">Time <Timer.Minutes/>:<Timer.Seconds/></div>
    </header>
)

export default Header
