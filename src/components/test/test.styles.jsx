import styled from 'styled-components'

export const TestComponentContainer = styled.div`
  background-color: ${({ theme }) => theme.base};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.2);
  font-family: 'Montserrat', 'sans-serif';

  h1,
  h4 {
    padding: 0px;
    margin: 0px;
    font-weight: 300;
  }

  h4 {
    margin-bottom: 20px;
  }

  form {
    background-color: ${({ theme }) => theme.bottomDetail};
    display: flex;
  }

  input {
    background-color: ${({ theme }) => theme.arch};
    border: 0px;
    padding: 10px;
    flex: 1 0;
    color: ${({ theme }) => theme.text};
  }

  button {
    padding: 10px 10px;
    background-color: transparent;
    border: 0px;
    color: ${({ theme }) => theme.text};
  }
`
