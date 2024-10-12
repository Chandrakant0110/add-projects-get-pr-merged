import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../features/userSlice";
import EditTask from "./EditUser";


const UserList = () => {
  const userList = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (loading) {
    return <p>User Listing</p>;
  }
  if (error) {
    return <p>There is an error </p>;
  }

  return (
      <div className="flex flex-col">
        <h2>User List</h2>
          <div  className="flex flex-col bg-gray-50 p-4 rounded-md shadow-sm">
            {userList.map((data,i) => (
              <div
                key={data.id+i}
                className="flex-row bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center"
              >
                <div className="flex  ">
                <img className="w-40 h-60" src={"https://picsum.photos/200/300?random="+i}></img>
              </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {data?.name}
                  </h3>

                  <p className="text-gray-600">{data?.username}</p>
                  <p className="text-gray-600">{data?.email}</p>
                </div>
                <div className="flex flex-col items-center">
                  <EditTask user={data} />
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="p-2 my-3  w-20 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
};

export default UserList;
