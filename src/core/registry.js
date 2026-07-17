import http400 from "../rules/http/400.js";
import http401 from "../rules/http/401.js";
import http403 from "../rules/http/403.js";
import http404 from "../rules/http/404.js";
import http405 from "../rules/http/405.js";
import http408 from "../rules/http/408.js";

export const registry = [
  http400,
  http401,
  http403,
  http404,
  http405,
  http408
];