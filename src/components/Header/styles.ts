import styled from "styled-components";
import background from "../../assets/Background.svg";

export const ContainerHeader = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DivHeader = styled.div`
  padding-top: 3vh;
  display: flex;
  justify-content: space-around;
`;

export const DivLogo = styled.div`
  display: flex;
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
  li {
    margin-right: 3vh;
    font-weight: 600;
    font-size: 14px;
    color: #111827;
  }
`;

export const DivApp = styled.div`
  img {
    margin-left: 4vh;
  }
`;

export const SectionManage = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
`;

export const DivWatchVideo = styled.div`
  width: 648px;
  h1 {
    font-weight: bold;
    font-size: 60px;
    color: #111827;
    margin-bottom: 0;
    padding-top: 10vh;
  }
  p {
    color: #374151;
  }
`;

export const DivImagePhone = styled.div`
  margin-left: 15vh;
`;

export const DivButtonWatch = styled.div`
  display: flex;
  margin-top: 4vh;
`;

export const ButtonGet = styled.div`
  margin-right: 5vh;
  button {
    background-color: #7c3aed;
    border-radius: 8px;
    color: #ffffff;
    border: 1px;
    width: 18vh;
    height: 7vh;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const ButtonWatch = styled.div`
  display: flex;
  img {
    margin-right: 1vh;
  }
  button {
    border: 1px;
    background-color: transparent;
    font-weight: 600;
    font-size: 16px;
    color: #7c3aed;
    width: 15vh;
    height: 7vh;
  }
`;