import styled from 'styled-components';

const HomePage = () => {
  return (
    <>
      <StyledMain id='main wrapper'>
        <div className='home max-content'>
          <h1>Wedding Details</h1>

          <p>We are Eloping!</p>
          <p>Sunday 19 June 2022</p>
          <ul>
            <li>{'11:15 - 11:30 AEST Wedding Ceremony TODO: exact address'}</li>
            <li>{'11:30 - 12:45 AEST Photo shoout at Treasury Gardens, Albert Park Lake and St Kilda Pier'}</li>
            <li>{'13:00 - 15:00 AEST Picnic in Catani Park (ALL INVITED)'}</li>
            <li>{'15:30 - 18:30 AEST Luna Park (ALL INVITED)'}</li>
            <li>{"17:00 Family Dinner @ Donovan's, St Kilda Foreshore"}</li>
          </ul>
        </div>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  .home {
    display: grid;
    gap: var(--space-4);
    padding: var(--space-4);
  }

  .recent-posts {
    background: red;
  }

  // bigger than mobile
  @media (min-width: 35rem) {
    .home {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto 1fr;
      gap: var(--space-8);
      margin-top: var(--space-8);
      padding-inline: var(--space-8);
    }
  }
`;

export default HomePage;
