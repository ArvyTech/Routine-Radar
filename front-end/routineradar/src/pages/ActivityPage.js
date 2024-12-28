import React, { useEffect, useState } from 'react';
import ActivityList from '../components/ActivityList';
import ActivityForm from '../components/ActivityForm';
import { getActivities } from '../services/api';

const ActivityPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities()
      .then((response) => {
        setActivities(response.results); // Pass 'results' to the state
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
      });
  }, []);

  return (
    <div
      className="bg-cover bg-center min-h-screen text-white"
      style={{
        backgroundImage: `url('/images/alexander-andrews-fsH1KjbdjE8-unsplash.jpg')`,
      }}
    >
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Activity Form */}
          <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Add New Activity</h1>
            <ActivityForm />
          </div>

          {/* Right Section: Activity List */}
          <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Recent Activities</h1>
            <ActivityList activities={activities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;