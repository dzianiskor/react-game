import './Settings.css'

const Settings = (props) => {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="setting-card">
                    <div>Music: </div>
                    <div>
                        <input type="range" value={props.musicValue*100} onChange={props.changeMusicValue}/>
                    </div>
                </div>
                <div className="setting-card">
                    <div>Game Sounds: </div>
                    <div>
                        <input type="range" value={props.soundValue*100} onChange={props.changeSoundValue}/>
                    </div>
                </div>
                <div className="setting-card">
                    <div>Type Cards: </div>
                    <div>
                        <button>Type 1</button>
                        <button>Type 2</button>
                        <button>Type 3</button>
                    </div>
                </div>
                <div className="setting-card">
                    <div>Type Board: </div>
                    <div>
                        <button>Type 1</button>
                        <button>Type 2</button>
                        <button>Type 3</button>
                    </div>
                </div>
                <div className="setting-card">
                    <div>Difficult: </div>
                    <div>
                        <button>Easy</button>
                        <button>Normal</button>
                        <button>Hard</button>
                    </div>
                </div>
                <div className="setting-card">
                    <button onClick={props.hideSettings}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Settings
