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
import {FullScreen, useFullScreenHandle} from "react-full-screen"
import Timer from 'react-compound-timer'
import {Route} from 'react-router-dom'
import Menu from './components/Menu/Menu'


function App() {
    const fullScreenHandler = useFullScreenHandle();
    const [difficult, setDifficult] = useState('hard')
    const [typeArena, setTypeArena] = useState(getStartArena())
    const [typeTable, setTypeTable] = useState(getStartTable())
    const [typeWrapperCard, setTypeWrapperCard] = useState(getStartWrapperCard())
    const [startGame, setStartGame] = useState(false)
    const [showSettings, setShowSettings] = useState(false)

    const [musicValue, setMusicValue] = useState(0.3)
    const [playMusic, {stop}] = useSound(music, {volume: musicValue})

    const [soundValue, setSoundValue] = useState(0.25)
    const [score, setScore] = useState(0)

    useEffect(() => {
        startGame ? playMusic() : stop()
    }, [startGame, playMusic, stop])

    return (
        <FullScreen handle={fullScreenHandler}>
            <Route path="/" exact render={() => {
                return !startGame ? (
                    <Menu setStartGame={() => setStartGame(true)}/>
                ) : (
                    <div className="App" style={{backgroundImage: `url("/img/backgrounds/${typeArena.path}")`}}>
                        <Timer formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}>
                            <Header
                                score={score}
                            />
                            {showSettings &&
                            <Settings
                                hideSettings={() => setShowSettings(false)}
                                musicValue={musicValue}
                                changeMusicValue={e => setMusicValue(e.target.value / 100)}
                                soundValue={soundValue}
                                changeSoundValue={e => setSoundValue(e.target.value / 100)}
                                typeArena={typeArena}
                                changeArena={(arena) => setTypeArena(arena)}
                                typeTable={typeTable}
                                changeTable={(table) => setTypeTable(table)}
                                typeWrapperCard={typeWrapperCard}
                                changeWrapperCard={(wrapper) => setTypeWrapperCard(wrapper)}
                                difficult={difficult}
                                changeDifficult={(difficult) => setDifficult(difficult)}
                            />
                            }
                            <Board
                                typeBoard={typeTable}
                                soundValue={soundValue}
                                typeWrapperCard={typeWrapperCard}
                                difficult={difficult}
                                changeScore={() => setScore((prev) => prev + 10)}
                                startGame={startGame}
                            />
                            <Footer
                                showSettings={() => setShowSettings(true)}
                                stopGame={() => setStartGame(false)}
                                startGame={startGame}
                                fullScreenHandler={fullScreenHandler}
                            />
                        </Timer>
                    </div>
                )
            }}/>
            <Route path="/statistics" exact render={() => (<h1>Statistics</h1>)}/>

        </FullScreen>
    );
}

export default App;
