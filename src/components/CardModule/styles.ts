import styled from 'styled-components'

interface ContainerProps {
  isActive?: boolean
}

export const Container = styled.div<ContainerProps>`
  color: ${props => props.isActive ? '#fff' : 'black'};

  span {
    cursor: pointer;
  }
`
