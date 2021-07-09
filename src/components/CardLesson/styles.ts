import styled from 'styled-components'
import { Form } from '@unform/web'

interface ContainerProps {
  isActive?: boolean
  isEditing?: boolean
}

export const Container = styled.div<ContainerProps>`
  max-width: 25rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: ${props => props.isEditing ? 'center' : 'space-between'};

  text-align: justify;
  color: black;
  padding: 1rem 1rem;
  border-radius: 6px;
  box-shadow: 0 0 2px 1px var(--black);
  cursor: pointer;

  h2 {
    margin-bottom: .2rem;
  }

  h4 {
    margin-top: .2rem;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  small {
    margin: .5rem 0;
  }

  button {
    margin-top: .6rem;
  }
`
