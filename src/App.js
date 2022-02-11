import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import "./dogs/DogItem";
import { DogsList } from "./dogs/DogsList";

function App() {
  return (
    <Container className="p-3">
      <div className="bg-dark p-5 rounded-3 mb-5">
        <h1 className="display-1 text-white">Infinite Dogs!</h1>
      </div>
      <DogsList />
    </Container>
  );
}

export default App;
