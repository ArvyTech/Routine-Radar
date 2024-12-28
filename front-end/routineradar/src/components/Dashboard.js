import React from 'react';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen text-white"
      style={{
        backgroundImage: `url('/images/image3.jpg')`,
      }}
    >
      {/* Dashboard Header */}
      <div className="text-center mb-16 pt-20">
        <h1 className="text-4xl font-bold text-white mb-3">Technology Usage</h1>
        <p className="text-lg text-gray-300">Track the usage trends and insights</p>
      </div>

      {/* Main Content */}
      <div className="space-y-12 bg-black bg-opacity-70 p-8 rounded-xl mx-5 md:mx-20">
        {/* Technology Usage Chart Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-white">Technology Usage Chart</h2>
          <div className="max-w-4xl mx-auto bg-black bg-opacity-80 p-6 rounded-xl shadow-xl border-2 border-purple-600">
            <Chart />
          </div>
        </section>

        {/* Placeholder for Future Integrations */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-white">Upcoming Integrations</h2>
          <p className="text-lg text-center text-gray-400">More features coming soon...</p>
        </section>

        {/* Future Stats and Metrics */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center text-white">Future Stats and Metrics</h2>
          <p className="text-lg text-center text-gray-400">This section will be populated later.</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
