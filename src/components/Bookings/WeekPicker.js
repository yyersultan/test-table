import { useRef } from "react";

export const WeekPicker = ({dispatch}) => {
    const textBoxRef = useRef();

    const goToDate = () => {
        dispatch({
            type: 'SET_DATE',
            payload: textBoxRef.current.value
        });
    }
    return <div className="weekPicker">
        <div className="Block">
            <button className="btn" onClick={() => dispatch({type: 'PREV_WEEK'})}> {'< Prev'}</button>
            <button className="btn" onClick={() => dispatch({type:'TODAY'})}>Today</button>
            <div>
                <input 
                    className="textBox"
                    placeholder="e.g. 2022-01-02"
                    defaultValue="2022-01-13"
                    type={'text'} 
                    ref={textBoxRef}/>
                <button
                    onClick={goToDate} 
                    className="btn">Go</button>
            </div>
            <button className="btn" onClick={() => dispatch({type: 'NEXT_WEEK'})}>{'Next >'}</button>
        </div>
    </div>
}