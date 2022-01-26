import { shuffle, swap } from "../../utils/game-logic";

const resetArr = [1,2,3,null,5,6,7,8,4]
export function reducer(state,action) {
    switch(action.type){
        case 'move':
            const[i,j] = action.payload;
            return {
                ...state,
                items: swap([...state.items],i,j),
                undoHistory: [...state.undoHistory,[i,j]],
                curr: state.undoHistory.length + 1 
            }
        case 'reset': 
            return {
                ...state,
                items: resetArr,
                undoHistory: [],
                curr: 0,
                complete: false
            }
        case 'shuffle':
            return {
                ...state,
                items: shuffle(state.items),
                undoHistory: [],
                curr: 0,
                complete: false
            }
        case 'undo':
            const[i2,j2] = action.payload;
            return {
                ...state,
                curr: state.curr - 1,
                items: swap([...state.items],j2,i2)
            }
        case 'redo':
            const[i3,j3] = action.payload;
            return {
                ...state,
                curr: state.curr + 1,
                items: swap([...state.items],i3,j3)
            }        
        case 'equal':
            return {
                ...state,
                complete: true
            }

        default : return state;
    }
}