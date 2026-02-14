import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg'
import './App.css'

const courseTitle = "React Basics";

function App() {
  const studentName = "Mouhanned";

  const student = {
    name: "Mouhanned",  
    age: 20,
    track: "Data Science",
  };

  function sayHello() {
    return "Hello " + studentName + ", welcome to the course!";
  }

  return (
    <div>
      <h1>My First React App</h1>

      <p>Student Name: {studentName}</p>

      <p>Course: {courseTitle}</p>

      <p>Welcome to {courseTitle}, {studentName}!</p>

      <label htmlFor="nameInput">Enter your name:</label>
      <input type="text" id="nameInput" />

      <h3>Student Info</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>
    </div>
  );
}

export default App
