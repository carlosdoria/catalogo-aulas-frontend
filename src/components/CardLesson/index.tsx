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
      <S.Container>
        {!isEditing ?
          <>
            <span>{title}</span>
            <a href={link} target='_blank' rel="noreferrer">Link da Aula</a>
            <h3>{dateFormated}</h3>
          </>
          :
          <Form onSubmit={newLesson => editLessons(lessonId, moduleId, newLesson.titleLesson, newLesson.link, newLesson.classDate)}>
            <Input name='titleLesson' defaultValue={title}/>
            <Input name='link' defaultValue={link}/>
            <Input name='classDate' type='date' defaultValue={defaultValueDate} />
            <button type='submit'>Atualizar</button>
          </Form>
        }
        <>
          <BiEdit onClick={() => handleComponentEditing(lessonId)}/>
          <BiTrash onClick={() => deleteLessons(lessonId, moduleId)}/>
        </>
      </S.Container>
      :
      <S.Container>
        <h1>{title}</h1>
        <a href={link} target='_blank' rel="noreferrer">Link da Aula</a>
        <h3>{new Intl.DateTimeFormat('pt-BR').format(new Date(classDate))}</h3>
      </S.Container>
    }
  </>)
}
