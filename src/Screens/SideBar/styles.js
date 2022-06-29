import styled from "styled-components";



export const Container = styled.div`
  z-index: 10000;
  background-color: #002973;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 400px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 400px;
    }
  }

  @media (min-width: 412px) and (max-width: 768px) {
    width: 100%;

  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;