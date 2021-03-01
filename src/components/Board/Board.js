import './Board.css'
import Card from './Card/Card'
import GuardBoard from './GuardBoard/GuardBoard'
import {useState} from 'react'
import useSound from 'use-sound'
import successSound from '../../sounds/success.mp3'
import failSound from '../../sounds/error.mp3'

const Board = (props) => {
    const [playSuccessSound] = useSound(successSound, {volume: props.soundValue});
    const [playFailSound] = useSound(failSound, {volume: props.soundValue});

    const [cards, setCards] = useState([
        {id: 1, cardId: 1, status: ''},
        {id: 2, cardId: 1, status: ''},
        {id: 3, cardId: 2, status: ''},
        {id: 4, cardId: 2, status: ''},
        {id: 5, cardId: 3, status: ''},
        {id: 6, cardId: 3, status: ''},
        {id: 7, cardId: 4, status: ''},
        {id: 8, cardId: 4, status: ''},
        {id: 9, cardId: 5, status: ''},
        {id: 10, cardId: 5, status: ''},
        {id: 11, cardId: 6, status: ''},
        {id: 12, cardId: 6, status: ''},
        {id: 13, cardId: 7, status: ''},
        {id: 14, cardId: 7, status: ''},
        {id: 15, cardId: 8, status: ''},
        {id: 16, cardId: 8, status: ''},
        {id: 17, cardId: 9, status: ''},
        {id: 18, cardId: 9, status: ''},
        {id: 19, cardId: 10, status: ''},
        {id: 20, cardId: 10, status: ''}
    ])
    const [compareCard, setCompareCard] = useState('')
    const [guardBoardAllowed, setGuardBoardAllowed] = useState(true)

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
            <div className="table-image" style={{backgroundImage: `url("/img/tables/${props.typeBoard}.jpg")`}}>
                <GuardBoard guardAllowed={guardBoardAllowed}>
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            id={card.id}
                            cardId={card.cardId}
                            status={card.status}
                            compareCard={compareCardsHandler}
                            volumeValue={props.soundValue}
                        />
                    ))}
                </GuardBoard>
            </div>
        </div>
    )
}


export default Board
