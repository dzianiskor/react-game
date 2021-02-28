import './Card.css'

const Card = (props) => {
    const pathHero = `/img/heroes/${props.cardId}.png`
    const pathWrapper = `/img/wrappers/1.png`

    const classes = ['g-card']  // clicked, success-card, fail-card
    if (props.status) {
        classes.push(props.status)
    }

    return (
        <div className={classes.join(' ')} onClick={() => props.compareCard(props)}>
            <div className="front">
                <img src={pathWrapper} alt="Wrapper"/>
            </div>
            <div className="back">
                <img src={pathHero} alt="Hero"/>
            </div>
        </div>
    )
}

export default Card
