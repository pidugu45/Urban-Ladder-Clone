import styled from "styled-components";
export const Button = styled.div`
  border: none;
  width: auto;
  height: 30px;
  background-color: transparent;
  border-radius: 3px;
  margin-top: 3px;
  background-color: coral;
  color: white;
  display: flex;
  justify-content: center;
  justify-items:center;
  padding: 0px 5px;
  &:hover{
      cursor: pointer;
      background-color: #2F4858;
  }
  & p{
      margin-top: 5px;
      margin-right: 5px;
  }
`;

