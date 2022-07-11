import React from 'react'
import { SidebarContainer, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onCLick={ toggle }>
            <CloseIcon onClick={toggle}></CloseIcon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "/About"    onClick={toggle}>About</SidebarLink>
                    <SidebarLink to = "/"         onClick={toggle}>Blog</SidebarLink>
                    <SidebarLink to = "/Projects"    onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to = "/Contact"  onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )    
};

export default Sidebar