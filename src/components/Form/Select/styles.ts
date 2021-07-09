import ReactSelect from 'react-select'
import styled from 'styled-components'

export const CustomSelect = styled(ReactSelect)`
  & .Select__indicator Select__dropdown-indicator {
    border-color: transparent transparent red;
    width: 300px;
  }
`
