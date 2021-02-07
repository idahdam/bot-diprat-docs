import React, {useState, useEffect} from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './navbar.elements'
import { FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {

   const [click, setClick] = useState(false)
   const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(true)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    
    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton) 

    return (
        <>
            <IconContext.Provider value = {{color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick = {closeMobileMenu}>
                            Bot Diprat
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/commands">Commands</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/submit-ideas">Submit Ideas</NavLinks>
                            </NavItem>
                        </NavMenu>
                        
                    </NavbarContainer>
                </Nav>  
            </IconContext.Provider>
        </>
    )
}

export default Navbar;