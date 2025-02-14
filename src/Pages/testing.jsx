import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestAOS = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init();

        // Function to check the 'will-change' property
        const checkWillChange = () => {
            // Select all elements that have the 'data-aos' attribute
            const aosElements = document.querySelectorAll('[data-aos]');
            
            console.log(`Found ${aosElements.length} elements with data-aos`);
            
            aosElements.forEach((element, index) => {
                // Add a dashed red border to the element for visibility
                element.style.border = '2px dashed red';
                
                // Get the computed CSS styles of the element
                const computedStyle = window.getComputedStyle(element);
                const willChange = computedStyle.getPropertyValue('will-change');
                
                console.log(`Element ${index + 1}:`, {
                    'data-aos': element.getAttribute('data-aos'),
                    'will-change': willChange,
                    'element': element.tagName,
                    'classes': element.className
                });
            });
        };

        // Run the check after AOS is initialized
        setTimeout(checkWillChange, 100);
    }, []);

    return (
        <>
            <style>
                {`
                    [data-aos] {
                        will-change: transform, opacity !important;
                    }
                `}
            </style>

           
        </>
    );
};

export default TestAOS;
