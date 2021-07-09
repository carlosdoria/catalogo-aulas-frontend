import styled from 'styled-components'

export const Container = styled.header`
  height: 10vh;
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
  display: flex;

  list-style: none;

  li {
    + li{
      padding-left: 2rem
    }

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
  }

`

export const Username = styled.a`
text-transform: capitalize
`
