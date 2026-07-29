import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const location = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); // remove '#'
        } else {
            window.scrollTo(0, 0);
            window.__lenis?.scrollTo(0, { immediate: true });
            lastHash.current = '';
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(() => {
                const element = document.getElementById(lastHash.current);
                if (element) {
                    if (window.__lenis) {
                        window.__lenis.scrollTo(element, { offset: -88 });
                    } else {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    lastHash.current = '';
                }
            }, 100);
        }
    }, [location]);

    return null;
};

export default ScrollToAnchor;
