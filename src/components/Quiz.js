import React from "react";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Модуль {id} завершен.</h2>
    </div>
  );
};

export default Quiz;
