import styled from 'styled-components';
import Accordion from '../common/Accordion/Accordion';
import { faqData } from '../../data/faqData';


type FAQProps = {};

const FAQ = ({}: FAQProps) => {
    return (
        <StyledFAQ>
            <Accordion data={faqData}/>
        </StyledFAQ>
    );
};

const StyledFAQ = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--space-12) 0;
  padding: 0 1.5rem;
`;

export default FAQ;
