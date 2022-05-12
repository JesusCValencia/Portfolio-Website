import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { NavLink as LinkS } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #3c408c;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
`;

export const CloseIcon = styled(FaTimes)`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    color: #bcacd4;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center

    @media screen and (max-width){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    align-items: center;
    justify-center: center;
    font-size: 2rem;
    list-style: none;
    transition: 0.4s ease-in-out;
    font-weight: bold;
    color: #885ca4;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: #bcacd4;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`