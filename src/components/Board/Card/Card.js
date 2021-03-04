import './Card.css'
import useSound from 'use-sound'
import clickSound from '../../../sounds/click.mp3'
import hoverSound from '../../../sounds/hover.mp3'
import {useEffect} from "react";

const Card = (props) => {
    const [playClickSound, playClickSoundDriver] = useSound(clickSound, { volume: props.volumeValue });
    const [playHoverSound, playHoverSoundDriver] = useSound(hoverSound, { volume: props.volumeValue });

    const pathHero = `/img/heroes/${props.cardId}.png`
    const pathWrapper = `/img/wrappers/${props.typeWrapperCard.path}`

    const classes = ['g-card']  // clicked, success-card, fail-card
    if (props.status) {
        classes.push(props.status)
    }
    useEffect(() => {
        return () => {
            playClickSoundDriver.stop()
            playHoverSoundDriver.stop()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[playClickSound, playHoverSound])


    return (
        <div
            className={classes.join(' ')}
            onClick={()=>{
                playClickSound()
                props.compareCard(props)
            }}
            onMouseEnter={playHoverSound}
        >
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
