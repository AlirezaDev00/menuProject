import { Navigate } from "react-router-dom";
import Main from "./Components/Main/Main";

const router = (mainCompData) => {
  return [
    { path: "/menu/:category", element: <Main products={mainCompData}></Main> },
    { path: "*", element: <Navigate to="/menu/all"></Navigate> },
  ];
};

export default router;
