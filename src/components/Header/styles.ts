import styled from 'styled-components'

export const Container = styled.header`
  height: 5.5rem;
  padding: 0 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
`

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  list-style: none;

  a {
    color: var(--white);
    /* color: #535353; */
    font-weight: bold;
    letter-spacing: .8px;

    cursor: pointer;
    filter: brightness(.8);
    transition: color .4s;

    :hover {
      /* color: #fff; */
      filter: brightness(1);
    }
  }
`

export const NavContent = styled.li``

