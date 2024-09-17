import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Bar = styled.div`
  height: 20px;
  background-color: lightgray;
  width: 100%;
  transition: width 0.5s;
  border-radius: 20px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.progress}%;
    height: 100%;
    background-color: #4faf5f;
    border-radius: 20px;
    transition: width 0.5s;
  }
`;

const ProgressBar = () => {
  const progress = parseInt(localStorage.getItem("progress")) || 0;

  return (
    <>
      <Container>
        <p>Progress</p>
        <Bar progress={progress} />
        <p> {progress}%</p>
      </Container>
    </>
  );
};

export default ProgressBar;
