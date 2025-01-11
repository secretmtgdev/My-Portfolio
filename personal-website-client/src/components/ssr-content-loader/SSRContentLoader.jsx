import React, { useEffect, useState } from 'react';

const SSRContentLoader = ({endpoint}) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/${endpoint}`)
            .then((response) => response.text())
            .then((html) => setContent(html))
            .catch((error) => console.error('Could not fetch SSR content:', error));
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: content }}>
        </div>
    );
};

export default SSRContentLoader;