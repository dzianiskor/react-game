import {getSavedData} from '../saveGame/saveGame'

export function getArenaList() {
    return [
        {id: 1, name: 'Fight', path: '1.jpg', active: false},
        {id: 2, name: 'Scared gnome', path: '2.jpg', active: false},
        {id: 3, name: 'Magic', path: '3.jpg', active: false},
        {id: 4, name: 'Sport', path: '4.jpg', active: false},
        {id: 5, name: 'Hearthstone', path: '5.jpg', active: false},
        {id: 6, name: 'Tavern', path: '6.jpg', active: true},
        {id: 7, name: 'Witcher', path: '7.jpg', active: false},
    ]
}

export function getStartArena() {
    let savedArena = getSavedData('arena')

    return (savedArena) ? savedArena : getArenaList().find((arena)=> arena.active)
}
