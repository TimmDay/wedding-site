import styled from 'styled-components';


type NotFoundPageProps = {};

const NotFoundPage = ({}: NotFoundPageProps) => {
    return (
        <StyledNotFoundPage  className="max-content">
            <h1>404</h1>
            <p>page was not found</p>
        </StyledNotFoundPage>
    );
};

const StyledNotFoundPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default NotFoundPage;
