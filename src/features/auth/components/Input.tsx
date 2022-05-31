import styled from 'styled-components';

export interface InputPropTypes {}

export default styled.input.attrs<{ autoComplete: string; spellCheck: boolean }>({
  autoComplete: 'off',
  spellCheck: false,
})<InputPropTypes>`
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid black;
  border-radius: 0.3rem;
  font-size: 1.25rem;

  &::placeholder {
    color: gray;
  }

  &:focus {
    outline: none;
  }
`;
