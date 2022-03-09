import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ResultItem } from "..";
import { getRepos } from '../../actions';

export default function Result() {
    const username = useSelector(state => state.username);
    const results = useSelector(state => state.results);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    const renderResults = results.map(result => (
        <ResultItem key={result.id} data={result} />
    ));

    useEffect(() => {
        username && dispatch(getRepos(username));
    }, [username])

    return (
        <>
        {username && <h2>{username}'s Repositories</h2>}
        <section className="repo-section">
            {
                loading ?
                <h1>Loading ...</h1> :
                (
                    error ?
                    <h1 role="alert">Error: {error}</h1> :
                    renderResults
                )
            }
        </section>
        </>
    );
}
