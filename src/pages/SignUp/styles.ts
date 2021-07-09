import styled from 'styled-components'
import { Form as UForm } from '@unform/web'

export const Container = styled.main`
  min-height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled(UForm)`
  height: 500px;
  width: 448px;

  border: 2px solid var(--white);
  border-radius: .5rem;

  padding: 3rem 2.8rem;

  display: flex;
  flex-direction: column;

  label {
    margin-top: 1.4rem;
    margin-bottom: 4px;

    small {
      padding: 1px 3px ;

      font-size: 12px;
      border-radius: 5px;

      color: rgb(36, 18, 75);
      background-color: rgb(255, 117, 99);
    }
  }
`

export const SubmitButton = styled.button`
  width: 60%;
  margin-top: 1.8rem;
  padding: .7rem 1.4rem;

  align-self: center;

  font-size: 16px;
  font-weight: bold;

  color: var(--second-background-color);
  background: var(--white);

  border: 1px solid var(--white);
  border-radius: 6px;

  text-decoration:none;
  cursor:pointer;
  transition: color .4s;
  transition: background .4s;

  :hover {
    color: var(--white);
    background: var(--second-background-color);
  }
`
