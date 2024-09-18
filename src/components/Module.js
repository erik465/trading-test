import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import modules from "../data/lessons";

const StyledLesson = styled.div`
  padding: 20px;
  border-radius: 15px;
  transition: 0.5s;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;

  &:hover {
    background-color: #4caf5020;
  }

  h2,
  p {
    margin: 0;
  }
`;

const AvailableButton = styled(Link)`
  display: block;
  background: #4caf50;
  color: #eee;
  padding: 5px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
`;

const BlockedButton = styled(Link)`
  display: block;
  background: grey;
  color: #eee;
  padding: 5px;
  text-align: center;
  border-radius: 15px;
`;

const Module = ({ index, title, content, blocked, lessons }) => {
  const progress = parseInt(localStorage.getItem("progress")) || 0;

  const currentLesson = (progress * modules[index].lessons.length) / 100;

  return (
    <StyledLesson>
      <h2>{title}</h2>
      <p>{content}</p>
      <ul>
        {lessons.map((lesson, index) => {
          return <li key={index}>{lesson.title}</li>;
        })}
      </ul>
      {!blocked ? (
        <AvailableButton
          to={`/module/${index}/lesson/${
            progress === 100 ? currentLesson : currentLesson + 1
          }`}>
          Go to lesson
        </AvailableButton>
      ) : (
        <BlockedButton>Blocked</BlockedButton>
      )}
      <ProgressBar percentage={progress} />
    </StyledLesson>
  );
};

export default Module;
