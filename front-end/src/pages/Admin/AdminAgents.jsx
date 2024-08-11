import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ConfirmationModal from './ConfirmationModal'; // Import the modal component
import '../../assets/css/AdminUser.css';

export const AdminAgents = () => {
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState(null);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const result = await axios.get("http://localhost:8080/api/agents/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("API Response:", result.data);
      setAgents(result.data);
      setFilteredAgents(result.data);
    } catch (error) {
      console.error("Error loading agents:", error);
    }
  };

  const deleteAgent = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/api/agents/${selectedAgentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`, // Add authorization header
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('Agent deleted successfully');
      setModalVisible(false); // Hide modal after successful deletion
      loadAgents(); // Reload agents after deletion
    } catch (error) {
      console.error('Error deleting agent:', error);
    }
  };

  const handleFilterChange = (e) => {
    const term = e.target.value.toLowerCase();
    setFilterTerm(term);
    const filtered = agents.filter(agent =>
      agent.name.toLowerCase().includes(term) ||
      agent.username.toLowerCase().includes(term) ||
      agent.email.toLowerCase().includes(term)
    );
    setFilteredAgents(filtered);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedAgents = [...filteredAgents].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredAgents(sortedAgents);
  };

  return (
    <div className="container-fluid w-full h-full pt-3 pl-10 pr-10 border">
      <div className="filter-container mb-3 border">
        <input
          type="text"
          className="form-control"
          placeholder="Search agents by name, username, or email..."
          value={filterTerm}
          onChange={handleFilterChange}
        />
      </div>
      <div className="table-container border">
        <h2>Agents</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">
                  <button onClick={() => handleSort('name')}>
                    Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                  </button>
                </th>
                <th scope="col">
                  <button onClick={() => handleSort('username')}>
                    Username {sortConfig.key === 'username' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                  </button>
                </th>
                <th scope="col">
                  <button onClick={() => handleSort('email')}>
                    Email {sortConfig.key === 'email' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                  </button>
                </th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.map((agent, index) => (
                <tr key={agent.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{agent.name}</td>
                  <td>{agent.username}</td>
                  <td>{agent.email}</td>
                  <td>{agent.role}</td>
                  <td>
                    <Link className="btn btn-primary mx-2" to={`/admin/viewagent/${agent.id}`}>
                      View
                    </Link>
                    <Link className="btn btn-outline-primary mx-2" to={`/admin/editagent/${agent.id}`}>
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        setSelectedAgentId(agent.id);
                        setModalVisible(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmationModal
        show={modalVisible}
        onConfirm={deleteAgent}
        onCancel={() => setModalVisible(false)}
        message="Are you sure you want to delete this agent?"
      />
    </div>
  );
};
