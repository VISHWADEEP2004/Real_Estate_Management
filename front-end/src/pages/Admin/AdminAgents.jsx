import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../assets/css/AdminUser.css';

export const AdminAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/users/all");
      const allUsers = result.data;
      // Filter agents
      const filteredAgents = allUsers.filter(user => user.role === 'AGENT');
      setAgents(filteredAgents);
    } catch (error) {
      console.error("Error loading agents:", error);
    }
  };

  const deleteAgent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/all/${id}`);
      loadAgents();
    } catch (error) {
      console.error("Error deleting agent:", error);
    }
  };

  return (
    <div className="container-fluid w-full h-full pt-3 pl-10 pr-10 border">
      <div className="table-container border">
        <h2>Agents</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent, index) => (
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
                      onClick={() => deleteAgent(agent.id)}
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
    </div>
  );
};
