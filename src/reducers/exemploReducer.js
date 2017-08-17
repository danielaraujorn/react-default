export default function exemploReducer(state=[], action) {
    let i
    switch (action.type){
        case 'getAllExemplos':
            return Object.assign([], state,action.data)
        case 'getOneExemplo':
            for (i = state.length - 1; i >= 0; i--) {
                if(state[i].uuid===action.data.uuid){
                    return Object.assign([], state,[...state.slice(0,i),action.data,...state.slice(1+i)])
                }
            }
            return Object.assign([], state,[...state,action.data])
        case 'deleteOneExemplo':
            if(state&&action.data){
                return [...state.filter((item)=>item.uuid!==action.data.uuid)]
            }
            return state
        default:
            return state
    }
}