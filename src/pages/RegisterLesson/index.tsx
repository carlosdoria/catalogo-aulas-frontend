import { useCallback, useEffect, useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { FormHandles } from '@unform/core'

import { CardModule, CardLesson, Input } from 'components'
import { getAPIClient } from 'services/axios'
import { useUser } from 'hooks/useUser'
import { api } from 'services/api'
import * as S from './styles'

interface IModule {
  _id: string
  title: string
  createdAt: string
}
interface ILesson {
  _id: string
  title: string
  link: string
  classDate: string
  createdAt: string
  module?: {
    _id: string
  }
}
interface NewLesson {
  title: string
  link: string
  classDate: string
}

interface ReactSelectProps {
  value: string
  label: string
}

export default function App () {
  const formRefModule = useRef<FormHandles>(null)
  const formRefLesson = useRef<FormHandles>(null)
  const context = useUser()

  const [ modules, setModules ] = useState<IModule[]>([])
  const [ lessons, setLessons ] = useState<ILesson[]>([])
  const [ moduleSelected, setModuleSelected ] = useState<string | null>()
  const [ componentEditing, setComponentEditing ] = useState('')

  function handleComponentEditing (id: string) {
    if (componentEditing === id) {
      setComponentEditing('')
      console.log(moduleSelected)
      getLessonsByModule(moduleSelected)
    }
    setComponentEditing(id)
  }

  async function getModules () {
    const response = await api.get('/modules/list')
    setModules(response.data)
  }

  async function getLessonsByModule (id:string | null | undefined) {
    const response = await api.get(`/lessons/list/${id}`)
    setLessons(response.data)
    console.log(response.data)
  }

  async function handleSubmitModule (title: string) {
    try {
      if (title === '') {
        formRefModule.current?.setErrors({
          title: 'O nome do módulo é obrigatório.',
        })
      }
      await api.post('/modules', title)
      getModules()
      formRefModule.current?.reset()
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSubmitLesson ({ title, link, classDate }:NewLesson) {
    const newLesson = {
      module: moduleSelected,
      title,
      link,
      classDate
    }
    try {
      await api.post('/lessons', newLesson)
      getModules()
      getLessonsByModule(moduleSelected)
      formRefLesson.current?.reset()
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteModule (id: string) {
    await api.delete(`/modules/${id}`)
    getModules()
  }

  async function editModule (id: string, newTitleModule: string, oldTitle: string) {
    console.log(id, newTitleModule)
    if (newTitleModule !== oldTitle) {
      await api.patch(`/modules/${id}`, {
        title: newTitleModule
      })
      getModules()
      setModuleSelected(null)
      setLessons([])
    }
    handleComponentEditing('')
  }

  async function deleteLessons (lessonId: string, moduleId:string) {
    await api.delete(`/lessons/${lessonId}`)
    getLessonsByModule(moduleId)
  }

  async function editLessons (LessonId: string, moduleId: string, newTitleLessons: string, newLink: string, newLessonDate: string) {
    await api.patch(`/lessons/${LessonId}`, {
      title: newTitleLessons,
      link: newLink,
      classDate: newLessonDate
    })
    getLessonsByModule(moduleId)
    handleComponentEditing('')
  }

  useEffect(() => {
    getModules()
  }, [])

  return (
    <S.Container>
      <S.ModuleContainer>
        <div>
          <h1>Cadastro de Módulos</h1>
          <S.FormModule ref={formRefModule} onSubmit={handleSubmitModule}>
            <Input name='title' placeholder='Módulo' required />

            <S.AddButton type='submit'>Adicionar</S.AddButton>
          </S.FormModule>
        </div>
        <S.ListModules>
          {modules.map(module => (
            <CardModule
              key={module._id}
              id={module._id}
              isAdmin={!!context.user.isAdmin}
              isEditing={componentEditing === module._id ? true : false }
              handleComponentEditing={handleComponentEditing}
              title={module.title}
              isActive={ false }
              editModule={editModule}
              deleteModule={deleteModule}
            />
          ))}
        </S.ListModules>
      </S.ModuleContainer>

      <S.ClassContainer>
        <div>
          <h1>Cadastro de Aulas</h1>
          <S.InputContent>
            <S.ReactSelect
              name='module'
              value={moduleSelected && undefined}
              onChange={(valueSelected: ReactSelectProps) => {
                getLessonsByModule(valueSelected.value)
                setModuleSelected(valueSelected.value)
              }}
              options={modules.map(module => {
                return {
                  value: module._id,
                  label: module.title,
                }
              })}
              placeholder='Selecione um módulo'
            />
            {moduleSelected &&
            <S.FormLesson ref={formRefLesson} onSubmit={handleSubmitLesson}>
              <Input name='title' placeholder='Aula' />
              <Input name='link' placeholder='Link da aula' />
              <Input name='classDate' placeholder='Data da aula' type='date' />
              <S.AddButton type='submit'>Adicionar</S.AddButton>
            </S.FormLesson>
            }
          </S.InputContent>
        </div>
        <div>
          {lessons.map(lesson => (
            <CardLesson
              key={lesson._id}
              lessonId={lesson._id}
              moduleId={lesson.module?._id}
              title={lesson.title}
              classDate={lesson.classDate}
              link={lesson.link}
              isAdmin={!!context.user.isAdmin}
              isEditing={componentEditing === lesson._id ? true : false }
              handleComponentEditing={handleComponentEditing}
              deleteLessons={deleteLessons}
              editLessons={editLessons}
            />
          ))}
        </div>
      </S.ClassContainer>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const apiClient = getAPIClient(ctx)
  const user = await apiClient.get('/users/token')

  if (!user.data.isAdmin) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}
