import { Modal } from "@mui/material"
import check_icon from './check.png';
import cancel_icon from './cancel.png';

export const ModalWindow = ({modal,handleClose,chance,answer}) => {
    return (
        <Modal
        open={!!modal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
          <div className="modal_container">
            <div className="result_game">
              {chance.map((sub) => (
                sub.map((el,i) => <div key={`${el[0]}#${i}`} className= {`result_block ${el[1]}`}/>)
              ))}
            </div>
            {modal==='win'
            ?<span className="correct_ans">
              {'Completed Succesfully'} <img className="icon" src={check_icon} /> 
            </span>
            :<span className="wrong_ans">
              {`You lose ! correct word is ${answer}`}
               <img className="icon" src={cancel_icon} />
              </span>} 
          </div>
          
      </Modal>
    )
}