import './Footer.css'

const Footer = ({showSettings, startGame, stopGame, fullScreenHandler}) => (
    <footer>
        <div className="button-group-wrapper">
            <div>
                <button className="btn setting-button" onClick={stopGame}>
                    <img src="/img/back.png" alt="back-menu"/>
                </button>
            </div>
            <div className="button-group">
                { (!fullScreenHandler.active)
                    ? (<button className="btn setting-button" onClick={fullScreenHandler.enter}>
                        <img src="/img/full_screen1.png" alt="full_screen"/>
                    </button>)
                    : (<button className="btn setting-button" onClick={fullScreenHandler.exit}>
                        <img src="/img/full_screen2.png" alt="full_screen"/>
                    </button>)
                }
            </div>
            <div>
                <button className="btn setting-button" onClick={showSettings}>
                    <img src="/img/setting.png" alt="setting-button"/>
                </button>
            </div>
        </div>
        <div className="footer-links">
            <span><a href='https://github.com/dzianiskor'>GitHub</a></span>
            <span><a href='https://www.youtube.com/'>YouTube</a></span>
            <span><a href='https://rs.school/js/'>RS.School</a></span>
            <span>© 2021</span>
        </div>
    </footer>
)

export default Footer
