import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    margin: 10px auto;
  }
`;
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  button {
    padding: 10px;
    border: 1px solid rgba(80, 78, 78, 0.5);
    border-radius: 10px 5px;
    cursor: pointer;
    background-color: rgb(214, 222, 214);
    color: #000;
  }
`;

function Counter(props: any) {
  return (
    <Wrapper>
      <h1>Counter {props.count}</h1>

      <ButtonWrapper>
        <button name="incrementCount" onClick={props.incrementCount}>
          Increment
        </button>
        <button
          name="decrementCount"
          onClick={props.decrementCount}
          disabled={props.count < 1}
        >
          Decrement
        </button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Counter;
