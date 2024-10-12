import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserList from "../components/Userlist";
import { describe, it, expect } from "vitest";
import { Provider } from "react-redux";
import { store } from "../features/store";
import { deleteUser } from "../features/userSlice";

describe("UserList.jsx Components", () => {
  it("UserList should be rendered", async () => {
    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
    expect(await screen.findByText("User List")).toBeInTheDocument();
  });

  it("Fetching 10 data users", async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=10"
    );
    const data = await response.json();
    expect(data).toHaveLength(10)
  });
  
  })
  




