import styled from "styled-components";

export const Produto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  margin: 0 12px;
  width: 224px;
  height: 315.43px;

  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  @media (min-width: 412px) and (max-width: 768px) {
    width: 180px;
    
  }

`;

export const ProdutoImagem = styled.img`
  width: 100%;
  height: 168.62px;
  border-radius: 6px;

  @media (min-width: 412px) and (max-width: 768px) {
    
  }

`;

export const ProdutoBotao = styled.button`
  width: 100%;
  height: 48.81px;
  border-radius: 4px;
  color: #df9f00;
  border: 2px solid #df9f00;
  transition: ease-in-out 0.2s;
  background-color: white;

  &:hover {
    background-color: #df9f00;
    color: white;
  }
`;

export const ProdutoTexto = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 0px;
`;
