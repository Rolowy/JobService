import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import * as NavData from './navdata';
import './style.css'

const Nav = styled.nav`
display: flex;
width: 250px;
height: 100vh;
background: #fff;
overflow: hidden;
flex-direction: column;
align-items: stretch;
align-content: center;
`

const Logo = styled.div`
padding: 20px;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: royalblue;
  text-decoration: none;
  padding: 1rem;
  position: relative;
  transition: background 0.3s ease-in-out;

  :hover {
    background: #ddd;
  }
`;

const Text = styled.span`
  margin-left: 10px;
`

const NavSettings = styled.ul`
padding: 0;
margin: 0;
  display: flex;
  flex-direction: column;

`


export default function Navigacja() {
  const [open, Setopen] = useState(true)

  const handleNav = () => {
    Setopen(!open);
  }


  return (
    <Nav>
        <Logo>123</Logo>
        <button onClick={handleNav}>X</button>

        <NavSettings>
        { NavData.NavData.map(e => {
          return <StyledLink key={e.name} to={e.url}>{e.icon} <Text>{e.name}</Text></StyledLink>
        })}
        </NavSettings>
    </Nav>
  )
}