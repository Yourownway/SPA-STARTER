import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
from{
    transform: rotate(0deg)
}
to {
    transform: rotate(360deg)
}
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: auto;
  width: 30%;
  text-align: right;

  margin-top: 100px;
  &::before {
    content: "";
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    border: 1rem solid blue;
    border-radius: 50%;
    border-top: 1rem solid yellow;
    border-bottom: 1rem solid green;
    margin-left: -140px;
    top: 70px;
    animation: ${rotate} 2s linear infinite;
  }
`;
