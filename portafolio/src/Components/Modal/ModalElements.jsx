
import styled from 'styled-components'



export const Overlay = styled.div`
width:100%;
height:100%;
position:fixed;
top:0;
left:0;
background-color:#111;
opacity:90%;
padding:40px;
display:flex;
align-items:center;
justify-content:center;
`;

export const ModalWrapp = styled.div`
width:600px;
height:70%;
background:#fff;
position:flex;
border-radius:5px;

`;

export const EncabezadoModal = styled.div`

display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:20px;
padding-bottom:20px;
border-bottom: 1px solid #000;

h3{
    font-weight:500;
    font-size:16px;
    color:#1766DC;
}
`;


export const BotonClose = styled.button`
position:absolute;
background:#FFF;
top:20%;
right:30%;
width 30px;
border:none;
cursor:pointer;
transition: .3s ease all;
border-radius:5px;
color:#1766DC;
&:hover{
    background:#F2F2;
}

svg{
    width:100%;
    height:100%;
}
`

export const Contenido = styled.div`
display:flex;
flex-direction:column;
align-items:center;
h1{
  font-size:42px;
  font-weight:700;
  margin-bottom:10px;
}
p{
  font-size:18px;
  margin-bottom:20px
}
img{
  width:60%;
}
`;