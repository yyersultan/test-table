import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBookables } from "../../utils/api";
import { Loader } from "../UI/Loader/Loader";



export const BookablesList = ({bookable,setBookable,isBookable = false}) => {
    const[bookables,setBookables] = useState([]);
    const[error,setError] = useState(null);
    const[isLoading,setLoading] = useState(true);


    const group = bookable?.group;
    const bookablesInGroup = bookables.filter(b => b.group === group);
    const groups = [...new Set(bookables.map(b => b.group))];

    useEffect(() => {
        getBookables()
        .then(data => {
            setBookable(data[0]);
            setBookables(data);
            setLoading(false);
        })
        .catch(e => {
            setError(e);
            setLoading(false)
        })
    },[]);

    const onNextBookable =() => {
        const i = bookablesInGroup.indexOf(bookable);
        const nextIndex = (i+1) % bookablesInGroup.length;
        setBookable(bookablesInGroup[nextIndex]);
    }
    const onGroupChange = (e) => {
        const bookablesInSelectedGroup = bookables.filter(b => b.group === e.target.value);
        setBookable(bookablesInSelectedGroup[0]);
    }

    if(isLoading){
        return <Loader />
    }

    if(error){
        return <div>{error}</div>
    }
    return (
        
            <div className='row1'>
                <select onChange={onGroupChange} className='bookableSelect'>
                    {groups.map((g,i) => {
                        return <option
                                value={g} 
                                key={`${g}_${i}`}>{g}</option>
                    })}
                </select>
                { bookablesInGroup.map((books,i) => {
                    return <div
                            key={books.id} 
                            onClick={() => setBookable(books)}
                            className={books.id === bookable.id?'selected':''}>
                                {books.title}
                            </div>
                })

                }
                <button onClick={onNextBookable} className='btn next'>
                    {'-> next'}
                </button>
                {isBookable && <Link to={'/bookables/new'} className="btn new">
                    New +
                </Link>
                }
                
            </div>
            
    )
}