import { Form } from '@unform/web'
import { Input } from 'components/Form/Input'
import { BiEdit, BiTrash } from 'react-icons/bi'

import * as S from './styles'

interface CardLessonProps {
  lessonId?: string
  moduleId?: string
  title: string
  classDate: string
  link: string
  isAdmin: boolean
  isEditing?: boolean
  editLessons?: (
    LessonId?: string,
    moduleId?: string,
    newTitleLessons?: string,
    newLink?: string,
    newLessonDate?: string
  ) => Promise<void>
  deleteLessons?: (lessonId: string, moduleId:string) => Promise<void>
  handleComponentEditing?: (id: string)=> void
}

export function CardLesson ({
  lessonId,
  moduleId,
  title,
  classDate,
  link,
  isAdmin,
  isEditing,
  deleteLessons,
  editLessons,
  handleComponentEditing
}: CardLessonProps) {
  const dateFormated = new Intl.DateTimeFormat('pt-BR').format(new Date(classDate))
  const dateFormatedSplit = dateFormated.split('/')
  const defaultValueDate = `${dateFormatedSplit[ 2 ]}-${dateFormatedSplit[ 1 ]}-${dateFormatedSplit[ 0 ]}`

  return (<>
    {isAdmin ?
      <S.Container isEditing={isEditing}>
        {!isEditing ?
          <div>
            <h2>{title}</h2>
            <a href={link} target='_blank' rel="noreferrer">Link da Aula</a>
            <h4>{dateFormated}</h4>
          </div>
          :
          <S.FormStyle onSubmit={newLesson => editLessons(lessonId, moduleId, newLesson.titleLesson, newLesson.link, newLesson.classDate)}>
            <small>Título da aula</small>
            <Input name='titleLesson' defaultValue={title}/>
            <small>Link</small>
            <Input name='link' defaultValue={link}/>
            <small>Data da aula</small>
            <Input name='classDate' type='date' defaultValue={defaultValueDate} />
            <button type='submit'>Atualizar</button>
          </S.FormStyle>
        }
        {!isEditing &&
        <div>
          <BiEdit size={30} onClick={() => handleComponentEditing(lessonId)}/>
          <BiTrash size={30} onClick={() => deleteLessons(lessonId, moduleId)}/>
        </div>
        }
      </S.Container>
      :
      <S.Container>
        <div>
          <h2>{title}</h2>
          <a href={link} target='_blank' rel="noreferrer">Link da Aula</a>
          <h4>Data da aula: {new Intl.DateTimeFormat('pt-BR').format(new Date(classDate))}</h4>
        </div>
      </S.Container>
    }
  </>)
}
