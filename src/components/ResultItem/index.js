import React from 'react';

export default function ResultItem({data}) {

    let dataName
    if (data.name.length > 26 ) {
        dataName = data.name.substring(0, 27) + "..."
    } else {
        dataName = data.name
    }
    
    return (
        <div className="result-item">
            {/* to-do: make pretty */}
            <h3>{dataName}</h3>
            <p>Forks: {data.forks_count}</p>
            <p>Stargazers: {data.stargazers_count}</p>
            <p>Open Issues: {data.open_issues}</p>
        </div>
    );
}
