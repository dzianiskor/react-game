import './App.css'
import {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Board from './components/Board/Board'
import useSound from 'use-sound'
import music from './sounds/music1.mp3'
import Settings from './components/Settings/Settings'

function App() {
    const [backgroundImage] = useState('6')
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
        <div className="App" style={{backgroundImage: `url("/img/backgrounds/${backgroundImage}.jpg")`}}>
            <Header/>
            {showSettings &&
            <Settings
                hideSettings={() => setShowSettings(false)}
                musicValue={musicValue}
                changeMusicValue={e => setMusicValue(e.target.value / 100)}
                soundValue={soundValue}
                changeSoundValue={e => setSoundValue(e.target.value / 100)}
            />
            }
            <Board typeBoard={tableImage} soundValue={soundValue}/>
            <button onClick={() => setStartGame(true)}>Start Game</button>
            <Footer
                showSettings={() => setShowSettings(true)}
                stopGame={()=>setStartGame(false)}
                startGame={startGame}
            />
        </div>
    );
}

export default App;
