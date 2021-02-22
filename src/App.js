import './App.css'
import {useState} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Board from './components/Board/Board'

function App() {
    const [backgroundImage] = useState('6')
    const [tableImage] = useState('1')

    return (
        <div className="App" style={{backgroundImage: `url("/img/backgrounds/${backgroundImage}.jpg")`}}>
            <Header/>
            <Board typeBoard={tableImage} />
            <Footer/>
        </div>
    );
}

export default App;
