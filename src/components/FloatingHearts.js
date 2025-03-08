import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
  }
`;

// Balloon component
const Balloon = styled.div`
  position: fixed;
  bottom: -100px;
  width: ${props => props.size}px;
  height: ${props => props.size * 1.2}px;
  background-color: ${props => props.color};
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: ${float} ${props => props.duration}s linear infinite;
  left: ${props => props.left}%;
  animation-delay: ${props => props.delay}s;
  z-index: 10;
  
  &:after {
    content: '';
    position: absolute;
    width: 4px;
    height: ${props => props.size * 0.7}px;
    background-color: #ffffff;
    bottom: -${props => props.size * 0.65}px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

// Star component
const Star = styled.div`
  position: fixed;
  bottom: -100px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.color};
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%,
    50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%
  );
  animation: ${float} ${props => props.duration}s linear infinite;
  left: ${props => props.left}%;
  animation-delay: ${props => props.delay}s;
  z-index: 10;
`;

const FloatingItems = ({ count = 15 }) => {
  const items = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 20 + 15;
    // Bright, fun colors for birthday/celebration
    const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#F8B195', '#F67280', '#C06C84'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 10;
    
    // Alternate between balloons and stars
    return i % 2 === 0 ? (
      <Balloon 
        key={i}
        size={size}
        color={color}
        left={left}
        duration={duration}
        delay={delay}
      />
    ) : (
      <Star 
        key={i}
        size={size}
        color={color}
        left={left}
        duration={duration}
        delay={delay}
      />
    );
  });
  
  return <>{items}</>;
};

export default FloatingItems;