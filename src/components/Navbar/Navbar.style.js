import styled from 'styled-components'
import {mobile} from '../../responsive'

export const Container = styled.div`
 max-height:5rem;
 ${mobile({ height: "50px" })}
`
export const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   ${mobile({ padding: "10px 0px" })}
`
export const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
export const Language = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

export const Input = styled.input `
 border: none;
 background-color: white;
 outline: none;
 ${mobile({ width: "50px" })}
`
export const Logo = styled.h1 `
 font-weight: bold;
 ${mobile({ fontSize: "24px" })}
`
export const Center = styled.div`
flex: 2;
display: flex;
justify-content: center;

`
export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`
export const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 2.0rem;
padding: 0.5rem;
`
export const MenueItem = styled.div`
   font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`