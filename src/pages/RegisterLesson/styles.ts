import styled from 'styled-components'
import { Form as UForm } from '@unform/web'
import Select from 'react-select'

export const Container = styled.main`
  margin-top: 3rem;
  padding: 0 10%;
`

export const ModuleContainer = styled.div`
`

export const ClassContainer = styled.div`
  margin-top: 3rem;
`

export const FormModule = styled(UForm)`
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
`
export const FormLesson = styled(UForm)`
  height: 38px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

   /* + div { */
     div{
       height: 38px;
       width: 300px;
     /* } */
   }
`

export const ButtonContainer = styled.div`
  /* margin-top: 3rem; */

  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: space-around;
`

export const AddButton = styled.button`
  height: 37px;

  margin-left: 1rem;
  padding: 0 2rem;

  color: var(--white);

  background: transparent;
  border: 2px solid var(--white);
  border-radius: .5rem;
`

export const ListModules = styled.div`
  margin-top: 2rem;
`

export const ReactSelect = styled(Select)`
  min-width: 240px;
`

export const InputContent = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
`
