import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';


type AccordionItemProps = {
    itemIndex: number,
    question: string,
    answer: string,
    activeItem: number,
    setActiveItem: Dispatch<SetStateAction<number>>
};

const AccordionItem = ({ itemIndex, question, answer, setActiveItem, activeItem }: AccordionItemProps) => {

    const handleClick = (e: any) => {
        e.preventDefault();
        if (activeItem === itemIndex) setActiveItem(999);
        else setActiveItem(itemIndex);
    }

    return (
        <StyledAccordionItem
            id={`question-${itemIndex}`}
            onClick={(e) => handleClick(e)}
            isActive={activeItem === itemIndex}
        >
            <div className="accordion-item">
                <a className="accordion-link" href={`#question-${itemIndex}`}>
                    {`${question}`}
                    <i>{'♡'}</i>
                </a>
                <div className="answer">
                    <p>
                        {`${answer}`}
                    </p>
                </div>
            </div>
        </StyledAccordionItem>
    );
};

const StyledAccordionItem = styled.div.attrs((props: { isActive: boolean }) => props)`
  background-color: var(--color-primary-offset);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: var(--space-4);
  box-shadow: var(--box-shadow);
  -webkit-tap-highlight-color: transparent; //accessibility note: ok with this, as component inherantly provides strong visual feedback

  .accordion-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    i {
      color: var(--color-accent-1);
      padding: 0.5rem;
      transition: transform 650ms;
      transform-origin: center center;
      transform: rotate(${(props) => props.isActive ? '180deg' : '0'});
      font-style: normal;
    }
  }
  .answer {
    overflow: hidden;
    position: relative;
    transition: max-height 580ms;
    max-height: ${(props) => props.isActive ? '20rem' : '0'};
    
    &:before {
      content: "";
      position: absolute;
      width: 0.6rem;
      height: 90%;
      background-color: var(--color-grey-100);
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-radius: 5px;
    }
    p {
      color: var(--color-contrast-offset);
      padding: 1rem 2rem;
      font-style: italic;
      white-space: pre-line;
    }
  }
`;

export default AccordionItem;
