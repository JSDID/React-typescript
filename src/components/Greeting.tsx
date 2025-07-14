import React from "react";

interface GreetingProps {
  name: string;
  age: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h2>Привет, {name}!</h2>
      <p>Тебе {age} лет.</p>
    </div>
  );
};

export default Greeting; 