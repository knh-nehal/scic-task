/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./../components/Loading";
import useAuth from "./../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading } = useAuth();
  const token = localStorage.getItem("token");

  if (loading) {
    return <Loading></Loading>;
  }

  if (token) {
    return children;
  }

  return (
    <Navigate
      to={"/login"}
      state={location?.pathname}
      replace={true}
    ></Navigate>
  );
};

export default PrivateRoute;
