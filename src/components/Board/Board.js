import './Board.css'
import Card from './Card/Card'
import GuardBoard from './GuardBoard/GuardBoard'
import {useState, useEffect} from 'react'
import useSound from 'use-sound'
import successSound from '../../sounds/success.mp3'
import failSound from '../../sounds/error.mp3'
import {getStartDeck} from '../../containers/deck/deck'

const Board = (props) => {
    const [playSuccessSound] = useSound(successSound, {volume: props.soundValue});
    const [playFailSound] = useSound(failSound, {volume: props.soundValue});
    const [cards, setCards] = useState(getStartDeck(props.difficult))
    const [compareCard, setCompareCard] = useState('')
    const [guardBoardAllowed, setGuardBoardAllowed] = useState(true)

    useEffect(()=>{
        setCards(getStartDeck(props.difficult))
    }, [props.difficult])

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
            }, 1000)
            setCompareCard('')
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
