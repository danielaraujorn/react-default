export default function exemploReducer(state=[], action) {
    switch (action.type){
        case 'toNumber':
            return action.data
        case 'toZero':
            return 0
        default:
            return state
    }
}