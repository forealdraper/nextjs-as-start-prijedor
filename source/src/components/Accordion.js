import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false);
    const nodeRef = useRef(null);

    const toggleAccordion = () => {
        setIsActive(prevIsActive => !prevIsActive)
    }

    return (
        <div className="flex flex-col w-full border-b-[1px] border-primary mt-8">
            <button className="flex justify-between gap-x-4 items-start text-lg pt-8 lg:pl-4 lg:pr-4 pb-4" onClick={toggleAccordion}>
                <h3 className="text-xl lg:text-3xl text-left w-[90%]">{title}</h3>
                {!isActive ? <FontAwesomeIcon icon={faChevronDown} className="pt-1 w-4" /> : <FontAwesomeIcon icon={faChevronUp} className="pt-1 w-4" />}
            </button>
            <Transition nodeRef={nodeRef} in={isActive} timeout={0}>
                {state => (
                    <div ref={nodeRef} className={`overflow-hidden max-h-0 transition-max-h duration-500 ease-in-out `} style={{ maxHeight: isActive ? `${nodeRef.current.scrollHeight}px` : '0px' }}>
                        <p className="pb-10 lg:pl-5 lg:pr-2">{text}</p>
                    </div>
                )}
            </Transition>
        </div>
    )
};

export default Accordion;