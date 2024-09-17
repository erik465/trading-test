import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import modules from "../data/lessons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 80px 25%;
`;



const Lesson = () => {

  const {  id, lessonId } = useParams();
  const moduleIndex = parseInt(id);
  const content = modules[moduleIndex].lessons;

  const currentLesson = parseInt(lessonId-1);
  const [currentPage, setCurrentPage] = useState(0)

  const navigate = useNavigate()

  const calcProgress = () =>{

    if(((currentLesson + 1) * 100) / content.length > parseInt(localStorage.getItem("progress"))){
    localStorage.setItem(
      "progress",
      ((currentLesson + 1) * 100) / content.length
    );
  }

  } 


  return (
    <Container>
    {parseInt(lessonId) !== 1 && <button onClick={() =>{
      setCurrentPage(0)
      navigate(`/module/${id}/lesson/${parseInt(lessonId)-1}`)
    }
    }>Previous</button>}
    <h1>{ content[currentLesson].title}</h1>
    <h2>{ content[currentLesson].goal}</h2>

    {content[currentLesson].content.filter((item, index)=> index === currentPage).map((item, index) => (
      <div key={index} style={{width: "100%"}}>
        {item.heading && <p>{item.heading}</p>}
        <div
          style={{
            background: "#4CAF50",
            height: "350px",
            margin: "20px 0",
          }}></div>

        {item.text.map((element, index) => {
          return(
          <div key={index} style={{marginBottom: 30}}>
            {element.heading && <h3>{element.heading}</h3>}
            <p  style={{ fontSize: 20, marginBottom: 10 }}>{element.text}</p>
          </div>
          )
          })}  
          
        
        
      </div>
    ))
     }
     <div>
      {currentPage < content[currentLesson].content.length-1 ? <button
        onClick={() => {
        window.scrollTo({
          top: 500,
          behavior: "smooth"
        });
        setCurrentPage(currentPage+1)

      }}>
        Next
      </button> : currentLesson <= content.length - 2 ? (
      <button
        onClick={() => {
          calcProgress()
          navigate(`/module/${id}/lesson/${parseInt(lessonId)+1}`);
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          setCurrentPage(0)
          

        }}>
        Next Lesson
      </button>
    ) : (
      <button
        onClick={() => {
          localStorage.setItem("progress", 100);
          
          
        }}>
        Finish Module
      </button>
    )}
    </div>

    
  </Container>
  )
}

export default Lesson