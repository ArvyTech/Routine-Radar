import React from 'react';
import styled from 'styled-components';

const ActivityCard = ({ activity }) => {
  return (
    <Card>
      <h4>{activity.technology}</h4>
      <p>{activity.description}</p>
      <small>{new Date(activity.date).toLocaleDateString()}</small>
    </Card>
  );
};

export default ActivityCard;

const Card = styled.div`
  background-color: #1e1e2f;
  color: #fff;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #00c49f;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.5;
  }

  small {
    font-size: 0.8rem;
    color: #aaa;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;
