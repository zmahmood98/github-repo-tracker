export const getRepos = username => {
    return async dispatch => {
        try {
            const resp = await fetch(`https://api.github.com/users/${username}/repos`)
            const res = await resp.json()
            dispatch({
                type: "LOAD_REPOS",
                payload: res
            })
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        }
    }  
}
