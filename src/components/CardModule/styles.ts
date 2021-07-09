import styled from 'styled-components'
import { Form } from '@unform/web'

interface ContainerProps {
  isActive?: boolean
  isAdmin?: boolean
}

export const Container = styled.div<ContainerProps>`
  span {
    color: ${props => props.isActive ? '#fff' : 'black'};
  }
  max-width: 25rem;
  margin-top: 1rem;

  text-align: justify;
  color: black;
  padding: 1rem 1rem;
  border-radius: 6px;
  box-shadow: 0 0 2px 1px var(--black);
  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;

  }
  button {
    height: 32px;

    margin-left: 1rem;
    padding: 0 1rem;

    color: var(--white);

    background: transparent;
    border: 2px solid var(--white);
    border-radius: .5rem;
  }
`

export const FormStyle = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
