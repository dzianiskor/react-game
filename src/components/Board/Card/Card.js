import './Card.css'

const Card = (props) => {
    const path = `/img/${props.type}/${props.cardId}.png`

    return (
        <div className="g-card">
            <img src={path} alt={props.type}/>
        </div>
    )
}

export default Card
