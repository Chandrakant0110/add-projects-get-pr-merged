import React from "react";
import AddTask from "./components/AddUser";
import UserList from "./components/Userlist.jsx";
import { Provider } from "react-redux";
import { store } from "./features/store.jsx";

function App() {
  return (
    <Provider store={store}>
    <div className="min-h-screen bg-gray-100 p-4">
      <div className=" max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          User List Management
        </h1>
        <AddTask />
        <UserList />
      </div>
    </div>
    </Provider>
  );
}

export default App;
