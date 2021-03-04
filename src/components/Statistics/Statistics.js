import './Staticstics.css'
import {NavLink} from 'react-router-dom'
import {getSavedData} from '../../containers/saveGame/saveGame'

const Staticstics = () => {
    const statistics = getSavedData('statistics')
    return (
        <div className="statistics-wrapper" style={{backgroundImage: `url("/img/backgrounds/8.jpg")`}}>
            <div>
                <table className="table table-hover table-light">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User</th>
                        <th scope="col">Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    {statistics && statistics.map((statistic, index)=> (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{statistic.login}</td>
                            <td>{statistic.score}</td>
                        </tr>)
                    )}
                    </tbody>
                </table>
            </div>

            <div className="link">
                <NavLink
                    to="/"
                >Back</NavLink>
            </div>
        </div>
    )
}

export default Staticstics
