import { CardModule, CardLesson } from 'components'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import * as S from '../styles/index.styles'

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
}

export default function App () {
  const [ modules, setModules ] = useState<IModule[]>([])
  const [ lessons, setLesson ] = useState<ILesson[]>([])
  const [ moduleSelected, setModuleSelected ] = useState('')

  async function handleModule (id: string) {
    if (moduleSelected === id) return

    setModuleSelected(id)
    const response = await api.get(`/lessons/list/${id}`)
    setLesson(response.data)
  }

  async function getModules () {
    const response = await api.get('/modules/list')
    setModules(response.data)
  }

  useEffect(() => {
    getModules()
  }, [])

  return (
    <S.Container>
      <S.ModuleContainer>
        <div>
          <h1>Módulos</h1>
          <h3>Selecione um módulo</h3>
        </div>
        <div>
          {modules.map(module => (
            <CardModule
              key={module._id}
              id={module._id}
              title={module.title}
              isAdmin={false}
              isActive={moduleSelected === module._id ? true : false }
              handleModule={handleModule}
            />
          ))}
        </div>
      </S.ModuleContainer>

      <S.ClassContainer>
        <div>
          <h1>Aulas</h1>
          <h3>Aulas disponíveis, selecione uma para assistir</h3>
        </div>
        <div>
          {lessons.map(lesson => (
            <CardLesson
              key={lesson._id}
              title={lesson.title}
              classDate={lesson.classDate}
              link={lesson.link}
              isAdmin={false}
            />
          ))}
        </div>
      </S.ClassContainer>
    </S.Container>
  )
}
