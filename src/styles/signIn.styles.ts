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
  }
`
export const ButtonContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: space-around;

  a {
    padding: .4rem 1.4rem;

    font-size: 16px;

    color:var(--white);
    background-color:transparent;

    border: none;
    border-radius: 6px;

    text-decoration: underline;
    cursor:pointer;

    :hover {
      text-decoration: none;
    }
  }
`

export const SubmitButton = styled.button`
  padding: .4rem 1.4rem;

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
