import React, { useEffect, useRef } from 'react';
import { initAnimationView } from './Animation/script';

const AnimateView = () => {
    const animateContainerRef = useRef(null);

    useEffect(() => {
        if (animateContainerRef.current) {
            initAnimationView(animateContainerRef.current);
        }
    }, []);

    return (
        <div>
            <div ref={animateContainerRef} style={{width: '100%', height: '100%'}}></div>
        </div>
    )
}

export default AnimateView;