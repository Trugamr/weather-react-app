import styled from 'styled-components'

export const SearchFieldForm = styled.form`
  width: 100%;
  display: flex;
`

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 300;
  font-size: 2.2rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px 10px;
  box-sizing: border-box;
  margin: auto;

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.text};
  }

  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`
