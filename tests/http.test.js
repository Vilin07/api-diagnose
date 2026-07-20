import { diagnose } from "./src/index.js";

const statusCodes = [
  400,
  401,
  403,
  404,
  405,
  408,
  409,
  410,
  413,
  415,
  422,
  429,
  500,
  501,
  502,
  503,
  504
];

statusCodes.forEach(status => {
  console.log("================================");
  console.log(diagnose({
    type: "http",
    status
  }));
});