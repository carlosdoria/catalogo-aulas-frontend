import { Input } from 'components/Form/Input'
import { BiEdit, BiTrash } from 'react-icons/bi'

import * as S from './styles'

interface CardModuleProps {
  id: string
  title: string
  isAdmin: boolean
  isActive: boolean
  isEditing?: boolean
  handleComponentEditing?: (id: string)=> void
  handleModule?: (title: string) => Promise<void>| null
  editModule?: (id: string, newTitleModule: string, title: string) => Promise<void>
  deleteModule?: (id: string) => Promise<void>
}

export function CardModule ({ id, title, isActive, isEditing, isAdmin, handleComponentEditing, handleModule, editModule, deleteModule }: CardModuleProps) {

  return (
    <>
      {isAdmin ? (
        <S.Container isActive={isActive} isAdmin={isAdmin}>
          {!isEditing ?
            <div>
              <h2>{title}</h2>
              <div>
                <BiEdit size={30} onClick={() => handleComponentEditing(id)}/>
                <BiTrash size={30} onClick={() => deleteModule(id)}/>
              </div>
            </div>
            :
            <S.FormStyle onSubmit={newTitle => editModule(id, newTitle.titleModule, title)}>
              <Input name='titleModule' defaultValue={title}/>
              <button type='submit'>Atualizar</button>
            </S.FormStyle>
          }
        </S.Container>
      ) : (
        <S.Container onClick={() => handleModule(id)} isActive={isActive}>
          <span>{title}</span>
        </S.Container>
      )}
    </>
  )
}
