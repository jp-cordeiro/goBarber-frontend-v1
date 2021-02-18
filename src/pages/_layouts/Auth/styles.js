import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    max-width: 315px;
    margin: 0 auto;
    flex-direction: column;

    button {
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      display: block;
      font-size: 1.2rem;
      background: rgb(87, 53, 175);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      transition: 0.5s ease;
      margin-bottom: 0.5rem;

      &.active,
      &:hover {
        transform: scale(1.05);
        background: rgb(75, 6, 153);
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
