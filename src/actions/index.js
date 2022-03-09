export const getRepos = username => {
    return async dispatch => {
        try {
            const resp = await fetch(`https://api.github.com/users/${username}/repos`, 
            {headers: {
                'Authorization': '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',
            }})
            const res = await resp.json();
            if(!Array.isArray(res)) throw res;
            dispatch({
                type: "LOAD_REPOS",
                payload: res
            });
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        }
    }  
}
