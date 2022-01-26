import { useState } from "react";
import {draw, getKeywords, initalState, WORDS} from '../../utils/constants';
import { check } from "../../utils/wordle-logic";
import { Alert } from "./Alert";
import './Wordle.css'

import { ModalWindow } from "./ModalWindow";

export function Wordle() {
  const [state, setState] = useState(initalState);

  const onBlockCl = (lettter) => {
    if (state.order + 1 < 6) {
      let chance = state.chance;
      let sub = state.chance[state.curr];
      sub[state.order] = [lettter, ""];
      chance[state.curr] = sub;
      setState({...state, chance,
        order: state.order + 1});
    }
  };

  const onEnter = () => {
    let chance = state.chance;
    let sub = state.chance[state.curr];
    let word = sub[0][0] + sub[1][0] + sub[2][0] + sub[3][0] + sub[4][0];
    if (WORDS.includes(word)) {
      let obj = state.letters;
      let newSub = check(sub, state.answer, obj);
      console.log(state.answer);
      chance[state.curr] = newSub;
      if(word === state.answer){
        setState({...state,
          modal: 'win'})
      }else{
        state.curr < 5 ? 
        setState({...state,chance,order: 0,letters: obj,
          curr: state.curr + 1})
        : setState({...state,modal:'lose'})
      }
    }else {
      setState({...state,showAlert: true})
      setTimeout(() => {
        setState({...state,showAlert: false})
      },1000);
    }
  };

  const onDelete = () => {
    if (state.order > 0) {
      let chance = state.chance;
      let sub = state.chance[state.curr];
      sub[state.order - 1] = ["", ""];
      chance[state.curr] = sub;
      setState({
        ...state,
        order: state.order - 1,
        chance
      });
    }
  };

  const handleClose = () => setState({
    ...initalState,
    // chance: draw(),
    // letters: getKeywords(),
    // answer: WORDS[Math.ceil(Math.random() * 2315)]
  });
  return (
    <div className="App2">
      <Alert mode = {state.showAlert} />
      <div className="input_wordle">
        {state.chance.map((sub) => {
          return sub.map((c, i) => (
            <div key={`${c}_${i}`} className={"block_wordle " + c[1]}>
              {c[0]}
            </div>
         ))})}
      </div>
      <div className="container_wordle">
        {Object.keys(state.letters).map((l) => (
          <button
            className={'button '+ state.letters[l]}
            key={`${l}`}
            onClick={() => onBlockCl(l)}
          > {l}
          </button>
        ))}
        <button className="button enter_btn" onClick={onEnter}>Enter</button>
        <button className="button delete_btn" onClick={onDelete}>Delete</button>
      </div>
     <ModalWindow 
      chance={state.chance}
      answer={state.answer}
      handleClose={handleClose} 
      modal={state.modal}/>
    </div>
  );
}
