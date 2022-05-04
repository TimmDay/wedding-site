import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const RegistryItemPage = () => {

  const router = useRouter();
  const slug = router.query.item;

  return (
    <StyledRegistryItemPage>
      <h1>{"registry item"}</h1>
      <p>{slug}</p>
    </StyledRegistryItemPage>
  )
}

const StyledRegistryItemPage = styled.div`
  
`;

export default RegistryItemPage;
