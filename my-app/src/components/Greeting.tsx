// src/components/Greeting.tsx
import React, { FC } from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div className="greeting">Hello, {name}!</div>;
};

export default Greeting;
