"use client";
import Counter from "@/components/Counter";
import { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  margin: 5% auto;
  h1 {
    margin: 10px auto;
  }
`;

export default function Home() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <MainWrapper className="main">
      <h1>Unit Testing</h1>
      <p>Ready to Work</p>
      <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      ></Counter>
    </MainWrapper>
  );
}
