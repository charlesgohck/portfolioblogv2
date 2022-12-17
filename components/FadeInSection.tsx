import React, { RefObject, PropsWithChildren, useEffect } from 'react';
import { useState } from 'react';

interface WrapperProps {
}

export default function FadeInSection(props: PropsWithChildren<WrapperProps>) {
    const [isVisible, setVisible] = useState(false);
    const domRef = React.useRef() as RefObject<HTMLDivElement>;

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        })
        observer.observe(domRef.current as HTMLDivElement);
    }, []);
    
    return <div 
        className={`fadeinsection ${isVisible ? 'isvisible' : ''}`}
        ref={domRef}
    >
        { props.children }
    </div>
}