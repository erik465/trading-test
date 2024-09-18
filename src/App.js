import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ModulesListPage from "./pages/ModuleListPage";
import ModulePage from "./components/ModulePage";
import QuizPage from "./pages/QuizPage";
import Lesson from "./components/Lesson";

function App() {
  return (
    <Router basename="/trading-test">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<ModulesListPage />} />
          <Route path="/module/:id" element={<ModulePage />}>
            <Route path="/module/:id/quiz" element={<QuizPage />} />
            <Route path="/module/:id/lesson/:lessonId" element={<Lesson />} />
          </Route>
          ¡{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
