import { useEffect, useReducer, useRef } from "react"
import { canMove, isEqual } from "../../utils/game-logic"
import { reducer } from "./reducer";
import resetIcon from './reset.png';
import shfIcon from './shuffle.png';

const win = [1,2,3,4,5,6,7,8,null];

const initalState = {
    items: [1,2,3,null,5,6,7,8,4],
    complete: false,
    undoHistory: [],
    curr: 0,
}
export const Game = () => {
   
    const[state,disptach] = useReducer(reducer,initalState)
    const onBlockClick = (i) => {
        const j = canMove(state.items,i);
        if(j >= 0){
            disptach({type: 'move',payload: [i,j]})
        }
    }
    const onReset = () => disptach({type: 'reset'});

    const onShuffle = () => disptach({type: 'shuffle'});

    const onUndo = () => {
        if(state.curr > 0){
            let index = state.undoHistory[state.curr-1];
            disptach({type:'undo',payload: [index[0],index[1]]});
        }
    }
    const onRedo = () => {
        if(state.curr  < state.undoHistory.length){
            let index = state.undoHistory[state.curr];
            disptach({type:'redo',payload:[index[0],index[1]]});
        }
    }
    useEffect(() => {
        if(isEqual(win,state.items)){
            disptach({type: 'equal'})
        }
    },[state.items]);
    return(
        <div className="Game">
            <div className="moves">Moves: {state.curr}</div>
            <div className="GameContainer">
                {state.items.map((item,i) => (
                    <div 
                        key={`${Date.now}_${i}`}
                        onClick={() => onBlockClick(i)}
                        className={item ? "block":"empty"}>
                        {item}
                    </div>
                ))}
            </div>
            <div className="btnGroup">
                <button className="reset" onClick={onReset}><img src={resetIcon}/> Reset</button>
                <button className="shuffle" onClick={onShuffle}>
                    <img width={'20'} height={'20'} src={shfIcon}/> Shuffle
                </button>
            </div>
            <div className="btnGroup">
                <button
                    onClick={onUndo} 
                    className="undo"> {'< Undo'}</button>
                <button 
                    onClick={onRedo}
                    className="redo">{'Redo >'}</button>
            </div>
            {state.complete 
            && <div className="completed">Completed</div>}
        </div>
    )
}