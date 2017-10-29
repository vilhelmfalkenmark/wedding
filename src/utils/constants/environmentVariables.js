export const NODE_ENV = process.env.NODE_ENV;

export const NODE_ENV_DEVELOPMENT = NODE_ENV === "development";

//////////////////////////////////////////
// API BASE
//////////////////////////////////////////
export const apiBase = NODE_ENV_DEVELOPMENT
  ? "http://localhost:5000/api"
  : "https://guarded-plateau-76604.herokuapp.com/api";
