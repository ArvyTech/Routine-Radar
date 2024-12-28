import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { getActivities } from '../services/api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getActivities()
          .then((response) => {
            const activities = response.results || []; // Extract 'results' array
            console.log("Processed Activities:", activities);
      
            // Group activities by technology and calculate counts
            const technologyData = activities.reduce((acc, activity) => {
              const techName = activity.technology;
              acc[techName] = (acc[techName] || 0) + 1;
              return acc;
            }, {});
      
            // Transform data for the chart
            const chartData = Object.entries(technologyData).map(([name, value]) => ({
              name,
              value,
            }));
            setData(chartData);
          })
          .catch((error) => {
            console.error("Error fetching activities:", error);
          });
      }, []);

    if (data.length === 0) {
      return <div>No data available for the chart</div>;
    }

    return(
        <div>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                label
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                animationBegin={0}
                animationDuration={1500}
                animationEasing="ease-in-out"
              >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length ]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
        </div>
    );
};

export default Chart;
