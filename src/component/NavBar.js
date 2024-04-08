import { useEffect, useState } from "react";
import{ Navbar,Container} from "react-bootstrap";
import logo from '../../assets/img/logo.svg';
import navicon1 from '../../assets/img/nav-icon1.svg';
import navicon2 from '../../assets/img/nav-icon2.svg';
export const NavBar = () =>{
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState[false];

    useEffect(() => {
        const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }  
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

    },[])

    const onUpdate = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar bg ="light" expand="lg" className={scrolled ?"scrolled":""}>
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <img src={logo} alt="Logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <span className="navbar-toggler-icon"></span>  
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdate('home')}>Home</Nav.Link>
                <Nav.Link href="#link" className = {activeLink === 'link' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdate('links')}>Link</Nav.Link>
                <Nav.Link href="#projects" className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdate('projects')}>Projects</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="action/3.4">Separated Link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src ={navicon1} alt=""/></a>
                    <a href="#"><img src ={navicon2} alt=""/></a>
                </div>
            </span>
            <button className="contact" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )

}