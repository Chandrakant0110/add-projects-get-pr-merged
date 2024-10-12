import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../features/userSlice";
import PropTypes from 'prop-types';

const EditUser = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      editUser({
        id: user.id,
        name,
        username,
        email,
      })
    );
    setIsEditing(false)
  };

  return (
    <div>
      {isEditing ? (
        <div className="absolute bg-white p-4 border rounded-md shadow-lg z-10">
          <h2 className="text-xl mb-3 "> Edit Task</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="user name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-4">
          <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              onClick={handleEdit}
              className="w-full bg-indigo-600 text-white py-2 px-2 rounded-md hover:bg-indigo-700"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
              }}
              className="bg-red-600 py-2 text-white px-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsEditing(true);
          }}
          className="p-2 w-20 bg-blue-500 text-white rounded-md hover:bg-blue-950"
        >
          Edit
        </button>
      )}
    </div>
  );
};

EditUser.propTypes = {
  user: PropTypes.shape({
    id : PropTypes.number,
    name:PropTypes.string,
    username:PropTypes.string,
    email:PropTypes.string
  })
}

export default EditUser;


