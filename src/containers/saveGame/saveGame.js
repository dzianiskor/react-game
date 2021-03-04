export function getSavedData(type) {
    return JSON.parse(localStorage.getItem(type))
}

export function setSavedData(type, data) {
    localStorage.setItem(type, JSON.stringify(data))
}

