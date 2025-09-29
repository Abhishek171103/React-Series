import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        console.log('ResizeComponent mounted, listening to resize events');
                
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('ResizeComponent unmounted, removed resize listener');
        }
    }, []); 

    // It will run only once when the component mounts and cleans up when it unmounts.

    return (
        <div>
            <h2>Window Width: {windowWidth}px</h2>
        </div>
    )
}

export default ResizeComponent