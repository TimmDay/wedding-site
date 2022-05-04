import styled from 'styled-components';


const SkipToContent = () => {
    return (
        <StyledSkipToContent href='#main'>
            Skip to main content
        </StyledSkipToContent>
    );
};

const StyledSkipToContent = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  background: var(--color-accent-1);
  color: var(--color-primary);
  padding: .5em 1em;
  margin-inline: auto;
  transform: translateY(-100%);
  transition: transform 200ms ease-in;

  &:focus {
    transform: translateY(0);
  }
`;

export default SkipToContent;
