import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper className="App">
      <p>Hello World</p>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
