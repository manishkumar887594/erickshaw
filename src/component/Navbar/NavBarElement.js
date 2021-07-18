
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

export const Nav= styled.nav`
background:white

;
height:60px;
display:flex;
justify-content:  space-between;
padding: 0.8rem calc((100vw - 1000px)/2);
`; 
export const NavLink = styled(Link)`
color:Red;
display: flex;
align-items:center;
padding :0 lrem;
height 100%;
cursor: pointer;
&.active{
    color:#000000
}`;

export const NavMenu= styled.nav`
display:flex;
align-items:center;
@media screen and (max-width:700px){
    display:none;
};
margin-right:24px;
`;
export const NavBtnLink = styled(Link)
`
border-radius: 4px;

color:black;
border:none;
cursor:pointer;
transition:all 0.5s ease-in-out;
margin-left:24px;
&.hover{
    transition: all 0.5s ease-in-out;
    background:	Red;
    color:red;
}

`;
