
export const getBookables = () => {
    return fetch('http://localhost:3001/bookables')
    .then(res => res.json());
}

export const  getBookable = (id) => {
    return fetch(`http://localhost:3001/bookables/${id}`)
    .then(res => res.json());
}

export const editBookable = (id,form) => {
    return fetch(`http://localhost:3001/bookables/${id}`,{
        method:'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body : JSON.stringify(form)   
    }).then(res => res.json())
}

export const deleteBookable = (id) => {
    return fetch(`http://localhost:3001/bookables/${id}`,{
        method:'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => res.json())
}

export const createBookable = (form) => {
    return fetch('http://localhost:3001/bookables',{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    }).then(resp => resp.json())
}