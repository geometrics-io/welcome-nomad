export default function searchDatabase (state = [], action) {
    switch (action.type) {
        case 'FIND_DATA':
            return action
        default:
            return state
    }
}