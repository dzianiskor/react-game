import './Header.css'

const Header = () => (
    <header>
        <div className="score">
            <span className="avatar-border"><img src="/img/user.svg" alt="avatar-border"/></span>
            <span className="avatar"><img src="https://avatars.githubusercontent.com/u/45198847?v=4" alt="avatar"/></span>
            <span>DES:&nbsp;</span>
            <span className="score-count">850</span>
        </div>
    </header>
)

export default Header
