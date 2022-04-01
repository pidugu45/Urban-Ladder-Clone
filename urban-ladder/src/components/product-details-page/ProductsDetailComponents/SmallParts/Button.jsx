import styled from "styled-components";

export const Button = styled.button`
  color: #999999;
  color: ${({ color }) => color};
  height: 30px;
  height: ${({ height }) => height};
  width: 110px;
  width: ${({ width }) => width};

  padding: 3px 4px;
  margin-left: 5px;
  border: 1px solid ${({ borC }) => borC};
  font-size: 12px;
  font-size: ${({ fontSize }) => fontSize};
  margin-top: 10px;
  background-color: ${({ bg }) => bg};
  cursor: pointer;
  border-radius: ${({ borderRadius }) => borderRadius};

  &:hover {
    background-color: ${({ hbg }) => hbg};
  }
`;
