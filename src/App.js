import './App.css'
import {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Board from './components/Board/Board'
import useSound from 'use-sound'
import music from './sounds/music1.mp3'
import Settings from './components/Settings/Settings'
import {getStartArena} from './containers/arena/arena'
import {getStartTable} from './containers/table/arena'
import {getStartWrapperCard} from './containers/wrapperCard/wrapperCard'
import { FullScreen, useFullScreenHandle } from "react-full-screen"


function App() {
    const fullScreenHandler = useFullScreenHandle();
    const [typeArena, setTypeArena] = useState(getStartArena())
    const [typeTable, setTypeTable] = useState(getStartTable())
    const [typeWrapperCard, setTypeWrapperCard] = useState(getStartWrapperCard())
    const [startGame, setStartGame] = useState(false)
    const [showSettings, setShowSettings] = useState(false)

    const [musicValue, setMusicValue] = useState(0.3)
    const [playMusic, {stop}] = useSound(music, {volume: musicValue})

    const [soundValue, setSoundValue] = useState(0.25)



    useEffect(() => {
        startGame ? playMusic() : stop()
    }, [startGame, playMusic, stop])

    return (
        <FullScreen handle={fullScreenHandler}>
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
                    changeArena={(arena)=>{ setTypeArena(arena) }}
                    typeTable={typeTable}
                    changeTable={(table)=>{ setTypeTable(table) }}
                    typeWrapperCard={typeWrapperCard}
                    changeWrapperCard={(wrapper)=>{ setTypeWrapperCard(wrapper) }}
                />
            }
            <Board typeBoard={typeTable} soundValue={soundValue} typeWrapperCard={typeWrapperCard}/>
            <button onClick={() => setStartGame(true)}>Start Game</button>
            <Footer
                showSettings={() => setShowSettings(true)}
                stopGame={() => setStartGame(false)}
                startGame={startGame}
                fullScreenHandler={fullScreenHandler}
            />

        </div>
        </FullScreen>
    );
}

export default App;
