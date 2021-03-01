import './Footer.css'

const Footer = ({showSettings, startGame, stopGame}) => (
    <footer>
        <div className="footer-links">
            <span><a href='https://github.com/dzianiskor'>GitHub</a></span>
            <span><a href='https://www.youtube.com/'>YouTube</a></span>
            <span><a href='https://rs.school/js/'>RS.School</a></span>
            <span>© 2021</span>
        </div>
        {startGame &&
            <div>
                <button className="btn setting-button" onClick={stopGame}>
                    Stop Game
                </button>
            </div>
        }
        <div>
            <button className="btn setting-button" onClick={showSettings}>
                <img src="/img/setting.png" alt="setting-button"/>
            </button>
        </div>
    </footer>
)

export default Footer
