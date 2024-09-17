import React from "react";
import Module from "../components/Module";
import modules from "../data/lessons";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap : 20px;
  padding: 20px;
  `



const ModulesPage = () => {
  return (
    <StyledDiv>
      {modules.map((module, index) => (
        <Module key={index} index={index} title={module.title} content={module.content} blocked={module.blocked} lessons={module.lessons} progress={module.progress}/>
      ))}
    </StyledDiv>
  );
};

export default ModulesPage;
