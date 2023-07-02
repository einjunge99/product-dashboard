import "@testing-library/jest-dom";
import React from "react";

global.React = React;

require("dotenv").config({
  path: ".env",
});

jest.mock("./src/helpers/getEnvironments.ts", () => ({
  getEnviroments: () => ({ ...process.env }),
}));
