export function getTableList() {
    return [
        {id: 1, name: 'Type 1', path: '1.jpg', active: true},
        {id: 2, name: 'Type 2', path: '2.jpg', active: false},
        {id: 3, name: 'Type 3', path: '3.jpg', active: false},
        {id: 4, name: 'Type 4', path: '4.jpg', active: false},
        {id: 5, name: 'Type 5', path: '5.jpg', active: false}
    ]
}

export function getStartTable() {
    return getTableList().find((table)=> table.active)
}
