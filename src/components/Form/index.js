import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Form() {
    const initialUsername = useSelector(state => state.username);
    const [username, setUsername] = useState(initialUsername);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "SET_USERNAME", payload: username});
        e.target.reset();
    };

    const updateValue = (e) => {
        setUsername(e.target.value);
    };

    return (
        <section className="header">
            <h1>GitHub Repository Search</h1>
            <p>Search a GitHub username to see their repositories!</p>
            <br></br>
        <form 
            aria-label="Search Bar" 
            onSubmit={handleSubmit}
        >
            <input 
                aria-label="Github username" 
                className="user-search"
                onChange={updateValue}
                type="input" 
                value={username}
            />
            <input type="submit" value="Search" className='submit-button'></input>
        </form>
        </section>
    );
}
