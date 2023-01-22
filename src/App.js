import { Outlet } from "react-router-dom"
import './App.css'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap'


export default function App() {
  return (
    <>
    <Navbar dark color="primary">
    <div className="container">
      <NavbarBrand href="/">Facebook like</NavbarBrand>
    </div>
  </Navbar>
  <Nav className="container">
        <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/adminPost">Admin Posts</NavLink>
      </NavItem>
      </Nav>
      
      <hr />
      <Outlet />
    </>
  )
}