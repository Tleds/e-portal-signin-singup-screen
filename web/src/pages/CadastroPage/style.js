import styled, { createGlobalStyle } from "styled-components";

export const GlobalPageStyle = createGlobalStyle`
  * {
    margin:0px;
    padding:0px;
  }
  body, html, input, button {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    font-family: 'Roboto';
    height:100%;
    width: 100%;
    background: #E5E5E5;
  }
`;
export const DivColumnStyle = styled.div`
  max-width: 550px;
  border-radius: 4px;
  background: rgba(252, 136, 63, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 50px auto;
  padding: 20px;
  flex-wrap: wrap;
`;
export const DivRowStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
`;

export const ButtonStyle = styled.button`
  width: 200px;
  height: 50px;
  border-radius: ${(props) => (props.noBorderRadius ? "0px" : "4px")};
  border: none;
  background: ${(props) =>
    props.disable ? "rgba(252, 190, 76, 0.5)" : "rgba(252, 190, 76)"};
  color: #000;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  transition: background 0.2;
  flex-shrink: 1;
  cursor: pointer;

  &:hover {
    background: #fcbe4ccc;
  }
`;
export const InputStyle = styled.input`
  border-radius: 4px;
  border-color: #000;
  height: 50px;
  width: 400px;
  margin: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  padding: 10px;
  flex: 1 1 auto;
  &::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000;
  }
`;
export const ImageStyle = styled.img`
  height: 100px;
  width: 250px;
  flex-shrink: 1;
`;
