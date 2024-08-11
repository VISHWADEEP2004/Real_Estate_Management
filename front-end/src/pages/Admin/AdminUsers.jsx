import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ConfirmationModal from './ConfirmationModal'; // Import the modal component
import '../../assets/css/AdminUser.css';

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const result = await axios.get("http://localhost:8080/api/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("API Response:", result.data);
      const allUsers = result.data;
      const userFiltered = allUsers.filter(user => user.role === 'USER');
      setUsers(userFiltered);
      setFilteredUsers(userFiltered);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };
  

  const deleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/auth/delete/${selectedUserId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('User deleted successfully');
      setModalVisible(false); // Hide modal after successful deletion
      loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleFilterChange = (e) => {
    const term = e.target.value.toLowerCase();
    setFilterTerm(term);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredUsers(sortedUsers);
  };

  return (
    <div className="container-fluid w-full h-full pt-3 pl-10 pr-10 border">
      <div className="filter-container mb-3 border">
        <input
          type="text"
          className="form-control"
          placeholder="Search users by name, username, or email..."
          value={filterTerm}
          onChange={handleFilterChange}
        />
      </div>
      <div className="table-container border">
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
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => {
                console.log("User object:", user);
                return (
                  <tr key={user.uid}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <Link className="btn btn-primary mx-2" to={`/admin/viewuser/${user.uid}`}>
                        View
                      </Link>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => {
                          setSelectedUserId(user.uid);
                          setModalVisible(true);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmationModal
        show={modalVisible}
        onConfirm={deleteUser}
        onCancel={() => setModalVisible(false)}
        message="Are you sure you want to delete this user?"
      />
    </div>
  );
};
