import './Settings.css'
import {getArenaList} from '../../containers/arena/arena'
import {getTableList} from '../../containers/table/arena'
import {getWrapperCardList} from '../../containers/wrapperCard/wrapperCard'
import {getDifficultList} from '../../containers/difficult/difficult'

const Settings = (props) => {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="setting-card">
                    <div>Music: </div>
                    <div>
                        <input type="range" value={props.musicValue*100} onChange={props.changeMusicValue}/>
                    </div>
                </div>
                <div className="setting-card">
                    <div>Game Sounds: </div>
                    <div>
                        <input type="range" value={props.soundValue*100} onChange={props.changeSoundValue}/>
                    </div>
                </div>
                <div className="setting-card">
                    <div>Type Arena: </div>
                    <div>
                        {getArenaList().map((arena)=>
                            (props.typeArena.id === arena.id)
                                ? <button key={arena.id} className="active">{arena.name}</button>
                                : <button key={arena.id} onClick={()=>props.changeArena(arena)}>{arena.name}</button>
                        )}
                    </div>
                </div>
                <div className="setting-card">
                    <div>Type Board: </div>
                    <div>
                        {getTableList().map((table)=>
                            (props.typeTable.id === table.id)
                                ? <button key={table.id} className="active">{table.name}</button>
                                : <button key={table.id} onClick={()=>props.changeTable(table)}>{table.name}</button>
                        )}
                    </div>
                </div>
                <div className="setting-card">
                    <div>Type Wrapper Cards: </div>
                    <div>
                        {getWrapperCardList().map((wrapper)=>
                            (props.typeWrapperCard.id === wrapper.id)
                                ? <button key={wrapper.id} className="active">{wrapper.name}</button>
                                : <button key={wrapper.id} onClick={()=>props.changeWrapperCard(wrapper)}>{wrapper.name}</button>
                        )}
                    </div>
                </div>
                <div className="setting-card">
                    <div>Difficult: </div>
                    <div>
                        {getDifficultList().map((difficult, index)=>
                            (props.difficult === difficult.value)
                                ? <button key={index} className="active">{difficult.name}</button>
                                : <button key={index} onClick={()=>props.changeDifficult(difficult.value)}>{difficult.name}</button>
                        )}
                    </div>
                </div>
                <div className="setting-card">
                    <button onClick={props.hideSettings}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Settings
