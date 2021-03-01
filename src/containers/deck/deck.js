export function getAllDeck() {
    return [
        {id: 1, cardId: 1, status: ''},
        {id: 2, cardId: 1, status: ''},
        {id: 3, cardId: 2, status: ''},
        {id: 4, cardId: 2, status: ''},
        {id: 5, cardId: 3, status: ''},
        {id: 6, cardId: 3, status: ''},
        {id: 7, cardId: 4, status: ''},
        {id: 8, cardId: 4, status: ''},
        {id: 9, cardId: 5, status: ''},
        {id: 10, cardId: 5, status: ''},
        {id: 11, cardId: 6, status: ''},
        {id: 12, cardId: 6, status: ''},
        {id: 13, cardId: 7, status: ''},
        {id: 14, cardId: 7, status: ''},
        {id: 15, cardId: 8, status: ''},
        {id: 16, cardId: 8, status: ''},
        {id: 17, cardId: 9, status: ''},
        {id: 18, cardId: 9, status: ''},
        {id: 19, cardId: 10, status: ''},
        {id: 20, cardId: 10, status: ''}
    ]
}

export function getStartDeck(mode) {
    let result;
    switch (mode) {
        case 'easy':
            result = getAllDeck().splice(0, 6);
            break;
        case 'normal':
            result = getAllDeck().splice(0, 14);
            break;
        default:
            result = getAllDeck();
    }
    shuffle(result)

    return result
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
