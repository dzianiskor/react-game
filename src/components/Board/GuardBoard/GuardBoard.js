import './GuardBoard.css'

const GuardBoard = ({guardAllowed, children}) => {
    const classes = ['guard-board']
    if (guardAllowed) {
        classes.push('guard-board-allowed')
    }

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}

export default GuardBoard
