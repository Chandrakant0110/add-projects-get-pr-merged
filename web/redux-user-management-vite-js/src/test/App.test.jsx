import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../features/store";

describe("App.jsx Components", () => {
  it("App should be rendered", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(await screen.findByText("User List Management")).toBeInTheDocument();
  });
});
