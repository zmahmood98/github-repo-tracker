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
        <form 
            aria-label="Search Bar" 
            onSubmit={handleSubmit}
        >
            <input 
                aria-label="Github username" 
                onChange={updateValue}
                type="input" 
                value={username}
            />
            <button type="submit">Search</button>
        </form>
    );
}
