import './Board.css'
import Card from './Card/Card'

const Board = (props) => {

    const cards = [
        {id: 1, cardId: 1, type: "wrappers"},
        {id: 2, cardId: 1, type: "wrappers"},
        {id: 3, cardId: 2, type: "heroes"},
        {id: 4, cardId: 2, type: "heroes"},
        {id: 5, cardId: 3, type: "heroes"},
        {id: 6, cardId: 3, type: "heroes"},
        {id: 7, cardId: 4, type: "heroes"},
        {id: 8, cardId: 4, type: "heroes"},
        {id: 9, cardId: 5, type: "heroes"},
        {id: 10, cardId: 5, type: "heroes"},
        {id: 11, cardId: 6, type: "heroes"},
        {id: 12, cardId: 6, type: "heroes"},
        {id: 13, cardId: 7, type: "heroes"},
        {id: 14, cardId: 7, type: "heroes"},
        {id: 15, cardId: 8, type: "heroes"},
        {id: 16, cardId: 8, type: "heroes"},
        {id: 17, cardId: 9, type: "heroes"},
        {id: 18, cardId: 9, type: "heroes"},
        {id: 19, cardId: 10, type: "heroes"},
        {id: 20, cardId: 10, type: "heroes"}
    ]

    return (
        <div className="table-image-wrapper">
            <div className="table-image" style={{backgroundImage: `url("/img/tables/${props.typeBoard}.jpg")`}}>
                {cards.map(card => (
                    <Card key={card.id} type={card.type} cardId={card.cardId}/>
                ))}
            </div>
        </div>
    )
}


export default Board
