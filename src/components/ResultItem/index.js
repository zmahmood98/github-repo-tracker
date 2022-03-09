import React from 'react';

export default function ResultItem({data}) {
    return (
        <div role="listitem" className="result-item">
            <h3>{data.name}</h3>
            <p>Forks: {data.forks_count}</p>
            <p>Stargazers: {data.stargazers_count}</p>
            <p>Open Issues: {data.open_issues}</p>
        </div>
    );
}
