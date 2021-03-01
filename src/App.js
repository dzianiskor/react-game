import './App.css'
import {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Board from './components/Board/Board'
import useSound from 'use-sound'
import music from './sounds/music1.mp3'
import Settings from './components/Settings/Settings'
import {getStartArena} from './containers/arena/arena'

function App() {
    const [typeArena, setTypeArena] = useState(getStartArena())
    const [tableImage] = useState('1')
    const [startGame, setStartGame] = useState(false)
    const [showSettings, setShowSettings] = useState(false)

    const [musicValue, setMusicValue] = useState(0.3)
    const [playMusic, {stop}] = useSound(music, {volume: musicValue})

    const [soundValue, setSoundValue] = useState(0.25)



    useEffect(() => {
        startGame ? playMusic() : stop()
    }, [startGame, playMusic, stop])

    return (
        <div className="App" style={{backgroundImage: `url("/img/backgrounds/${typeArena.path}")`}}>
            <Header/>
            {showSettings &&
                <Settings
                    hideSettings={() => setShowSettings(false)}
                    musicValue={musicValue}
                    changeMusicValue={e => setMusicValue(e.target.value / 100)}
                    soundValue={soundValue}
                    changeSoundValue={e => setSoundValue(e.target.value / 100)}
                    typeArena={typeArena}
                    changeArena = {(arena)=>{ setTypeArena(arena) }}
                />
            }
            <Board typeBoard={tableImage} soundValue={soundValue}/>
            <button onClick={() => setStartGame(true)}>Start Game</button>
            <Footer
                showSettings={() => setShowSettings(true)}
                stopGame={() => setStartGame(false)}
                startGame={startGame}
            />
        </div>
    );
}

export default App;
