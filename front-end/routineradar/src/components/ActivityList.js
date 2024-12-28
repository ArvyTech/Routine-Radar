import React from 'react';
import styled from 'styled-components';
import ActivityCard from './ActivityCard';

const ActivityList = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <div>No activities to display.</div>;
  }

  return (
    <ActivityListContainer>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </ActivityListContainer>
  );
};

export default ActivityList;

const ActivityListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
