import styled from 'styled-components';
import AccordionItem from './AccordionItem';
import { useState } from 'react';


type FaqData = {
    question: string,
    answer: string
}

type AccordionProps = {
    data: FaqData[]
};

const Accordion = ({ data }: AccordionProps) => {
    const [activeItem, setActiveItem] = useState(999);

    return (
        <StyledAccordion className="max-content">
            {data.map(({ question, answer }, index) => (
                <AccordionItem
                    key={`accordion-${index}`}
                    itemIndex={index}
                    question={question}
                    answer={answer}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />
            ))}
        </StyledAccordion>
    );
};

const StyledAccordion = styled.div`
  flex-direction: column;
`;

export default Accordion;
