import './Board.css'
import Card from './Card/Card'
import GuardBoard from './GuardBoard/GuardBoard'
import {useState, useEffect} from 'react'
import useSound from 'use-sound'
import successSound from '../../sounds/success.mp3'
import failSound from '../../sounds/error.mp3'
import {getStartDeck} from '../../containers/deck/deck'
import {getSavedData, setSavedData} from '../../containers/saveGame/saveGame'

const Board = (props) => {
    const [playSuccessSound, playSuccessSoundDriver] = useSound(successSound, {volume: props.soundValue});
    const [playFailSound, playFailSoundDriver] = useSound(failSound, {volume: props.soundValue});
    const [cards, setCards] = useState((getSavedData('cards')) ? getSavedData('cards') : getStartDeck(props.difficult))
    const [compareCard, setCompareCard] = useState('')
    const [guardBoardAllowed, setGuardBoardAllowed] = useState(true)
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        if (!firstRender) {
            setCards(getStartDeck(props.difficult))
        }
        setFirstRender(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.difficult])

    useEffect(() => {
        return () => {
            playSuccessSoundDriver.stop()
            playFailSoundDriver.stop()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playSuccessSound, playFailSound])

    function checkFinishGame() {
        let counter = 0
        cards.forEach((card) => {
            if (card.status === 'success-card') {
                counter++
            }
        })
        if (cards.length - counter <= 2) {
            setTimeout(()=>{
                console.log('finish')
                props.finishedGame()
                setCards(getStartDeck(props.difficult))
            }, 5000)
        }
    }

    function changeStatus(id, status) {
        const newCards = [...cards];
        newCards.forEach((card, index) => {
            if (card.id === id || card.status === 'clicked') {
                newCards[index] = {...newCards[index], status}
            }
        })
        if (status === 'clicked') {
            setCards(() => newCards)
        } else {
            setTimeout(() => {
                setCards(() => newCards)
                setSavedData('cards', newCards)
            }, 1000)
        }
        setTimeout(() => {
            setGuardBoardAllowed(true)
        }, 1000)
    }

    function compareCardsHandler({id, cardId, status}) {
        setGuardBoardAllowed(false)
        if (status === 'success-card') {
            setGuardBoardAllowed(true)
            return true
        }
        changeStatus(id, 'clicked')
        if (!compareCard || compareCard.id === id) {
            setCompareCard({id, cardId})
        } else if (compareCard.cardId === cardId) {
            changeStatus(id, 'success-card')
            setTimeout(() => {
                playSuccessSound()
                props.changeScore()
            }, 1000)
            setCompareCard('')
            checkFinishGame()
        } else {
            changeStatus(id, 'fail-card')
            setTimeout(() => {
                playFailSound()
            }, 1000)
            setCompareCard('')
        }
    }

    return (
        <div className="table-image-wrapper">
            <div className="table-image" style={{backgroundImage: `url("/img/tables/${props.typeBoard.path}")`}}>
                <GuardBoard guardAllowed={guardBoardAllowed}>
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            id={card.id}
                            cardId={card.cardId}
                            status={card.status}
                            compareCard={compareCardsHandler}
                            volumeValue={props.soundValue}
                            typeWrapperCard={props.typeWrapperCard}
                        />
                    ))}
                </GuardBoard>
            </div>
        </div>
    )
}


export default Board
