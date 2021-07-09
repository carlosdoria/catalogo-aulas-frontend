import styled from 'styled-components'

interface Input {
  ref: any
}

export const Input = styled.input<Input>`
  height: 38px;
  min-width: 160px;
  /* margin-top: 1.4rem; */
  padding: .7rem .5rem;

  border: none;
  border-radius: 5px;
`

export const Error = styled.span`
  width: fit-content;
  margin-top: 2px;
  padding: 1px 3px ;

  font-size: 12px;
  border-radius: 5px;

  color: rgb(36, 18, 75);
  background-color: rgb(255, 117, 99);
`
