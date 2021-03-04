import {getSavedData} from '../saveGame/saveGame'

export function getWrapperCardList() {
    return [
        {id: 1, name: 'Standard', path: '1.png', active: true},
        {id: 2, name: '30th Anniversary', path: '2.png', active: false},
        {id: 3, name: 'Pandaria', path: '3.png', active: false},
        {id: 4, name: 'Black temple', path: '4.png', active: false},
        {id: 5, name: 'Legendary', path: '5.png', active: false},
        {id: 6, name: 'Pirates', path: '6.png', active: false}
    ]
}

export function getStartWrapperCard() {
    let savedWrapper = getSavedData('wrapperCard')

    return (savedWrapper) ? savedWrapper : getWrapperCardList().find((table)=> table.active)
}
