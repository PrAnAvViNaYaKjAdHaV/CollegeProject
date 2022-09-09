import styled from "styled-components";
import {mobile} from '../../responsive'
export const Container = styled.div`
 flex: 1;
 margin:0.3rem;
 height: 65vh;
 position: relative;
`
export const Image  = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "20vh" })}
`
export const Title = styled.h1`
 color: white;
`
export const Button = styled.button`
padding: 1rem;
font-size:1rem;
color: black;
margin: 0.8rem;
cursor: pointer;
`
export const Info = styled.div`
position:absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`