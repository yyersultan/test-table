
export default function(state,action) {
    switch(action.type){
        case "FETCH_BOOKABLES_REQUEST":
            return {
                ...state,
                isLoading: true
            }
        case "FETCH_BOOKABLES_SUCCES":
            return {
                ...state,
                isLoading: false,
                bookables: action.payload
            }
        case "FETCH_BOOKABLES_ERROR":
            return {
                ...state,
                isLoading: false,
                error: 'Some problem in fetch'
            }
        case "NEXT_BOOKABLE":
            return {
                ...state,
                bookableIndex: (state.bookableIndex +1) % (state.bookables.length-2)
            }
        case "SET_GROUP":
            return {
                ...state,
                bookableIndex: 0,
                group: action.payload
            }
        case 'SET_BOOKABLE_INDEX':
            return {
                ...state,
                bookableIndex: action.payload
            }
        case 'SET_SHOW_INFO':
            return {
                ...state,
                showInfo: !state.showInfo
            }
        default : throw new Error("Action type doesnt match");
    }
}