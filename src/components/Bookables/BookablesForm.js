import { useState } from "react"
import { Link } from "react-router-dom";
import {days,sessions} from '../../static.json'

const initalState = {
    id: Date.now(),
    group:'',
    notes: '',
    title: '',
    sessions: [],
    days: []
}
export const BookablesForm = ({bookables,onSubmit,handleDelete}) => {
    const[form,setForm] = useState(() => ( bookables ? bookables : initalState));

    const onInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })   
    }

    const onCheckBoxCh = (e) => {
        const {name,checked,value} = e.target; 
        if(checked){
            setForm({
                ...form,
                [name]: [...form[name],+value]
            })
        }else{
            setForm({
                ...form,
                [name]: form[name].filter( i => i !== +value)
            })
        }
    }
    const onCreateBookable = () => {
        onSubmit(form);
    }
    return (
        <>
        <div className="ComponentHeader">
            {bookables ? 'Edit':'New'} Bookable
        </div>
        <div className="bookable_form">
            <div>Title</div>
            <input 
                value={form.title}
                onChange={onInputChange} 
                name='title' className="input"/>

            <div>Group</div>
            <input 
                value={form.group}
                onChange={onInputChange}
                name='group' 
                className="input"/>

            <div>Notes</div>
            <textarea 
                style={{fontSize:'15px'}}
                rows={'6'}
                cols={'70'}
                onChange={onInputChange}
                value={form.notes} 
                name='notes'/>
            <div className='ulList'>
                <ul>
                    {days.map((d,i) => (
                        <li key={d}>
                            <input 
                                name='days' 
                                value={i} 
                                type={'checkbox'}
                                checked = {form.days.includes(i)}
                                onChange={onCheckBoxCh}
                                />
                            {d}
                        </li>
                    ))}
                </ul>

                <ul>
                    {sessions.map((s,i) => (
                        <li key={s}>
                            <input 
                                checked = {form.sessions.includes(i)}
                                name='sessions' 
                                value={i} 
                                type={'checkbox'}
                                onChange={onCheckBoxCh}
                                />
                            {s}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
        <div className="btnGROUP">
            
            {bookables && <button onClick= {handleDelete} className="btn delete">Delete</button>}
            <div>
                <Link 
                    to={'/bookables'} 
                    className="btn new">
                    Cancel 
                </Link>
                <button 
                    style={{marginLeft:'10px'}}
                    onClick={onCreateBookable} 
                    className='btn'>
                    {bookables ? 'Save':'Create'}
                </button>
            </div>
            
        </div>
    </>
    )
}