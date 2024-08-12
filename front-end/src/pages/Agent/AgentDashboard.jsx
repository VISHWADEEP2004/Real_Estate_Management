import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AgentDashboard = () => {
  const [agent, setAgent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const agentId = localStorage.getItem('userId');
        if (!agentId) {
          setError('Agent ID not found in localStorage.');
          setLoading(false);
          return;
        }

        const response = await axios.get(`http://localhost:8080/api/agents/${agentId}`);
        setAgent(response.data);
        setFormData({
          name: response.data.name,
          phone: response.data.phone,
          email: response.data.email,
        });
      } catch (error) {
        setError('An error occurred while fetching agent details.');
      } finally {
        setLoading(false);
      }
    };

    fetchAgentData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const agentId = localStorage.getItem('userId');
      if (!agentId) {
        setError('Agent ID not found in localStorage.');
        return;
      }

      await axios.put(`http://localhost:8080/api/agents/${agentId}`, formData);
      setSuccess('Agent details updated successfully.');
    } catch (error) {
      setError('An error occurred while updating agent details.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center text-gray-700 dark:text-gray-300 text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center text-red-600 dark:text-red-400 text-xl">{error}</div>
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center text-gray-700 dark:text-gray-300 text-xl">No agent found.</div>
      </div>
    );
  }

  return (
    <div className="sticky left-0 top-0 flex items-center justify-center min-h-screen  dark:bg-gray-900 ">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">Edit Agent Profile</h1>
        {success && <div className="text-center text-green-600 dark:text-green-400 mb-4">{success}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentDashboard;
