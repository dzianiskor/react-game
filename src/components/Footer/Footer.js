import './Footer.css'
import {useEffect} from 'react'

const Footer = ({showSettings, stopGame, fullScreenHandler}) => {
    useEffect(()=>{
        function handleKeyUp(event) {
            // eslint-disable-next-line
            switch (event.code) {
                case 'Backspace' :
                    stopGame()
                    break
                case 'KeyF':
                    fullScreenHandler.active ? fullScreenHandler.exit() : fullScreenHandler.enter()
                    break
                case 'KeyM':
                    showSettings()
                    break
            }
        }
        window.addEventListener("keyup", handleKeyUp)
        return () => window.removeEventListener("keyup", handleKeyUp)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fullScreenHandler])

    return (
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
                <span><a href='https://github.com/dzianiskor/react-game'>GitHub</a></span>
                <span><a href='https://www.youtube.com/watch?v=Z4ClOMxCYy8'>YouTube</a></span>
                <span><a href='https://rs.school/js/'>RS.School</a></span>
                <span>© 2021</span>
            </div>
        </footer>
    )
}


export default Footer
