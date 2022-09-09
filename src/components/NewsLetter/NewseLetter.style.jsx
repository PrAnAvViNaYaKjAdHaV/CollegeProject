import styled from "styled-components";
import {mobile} from '../../responsive'
export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
`;

export const Desc = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom:1.2rem;
  ${mobile({ textAlign: "center" })}
`;

export const InputContainer = styled.div`
  width: 50%;
  height:3rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid lightgray;
  ${mobile({ width: "80%" })}
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 1rem;
  margin-right:0.2rem ;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;