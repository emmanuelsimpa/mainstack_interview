/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
import ErrorPage from "./component/ErrorPage";

const Layout = lazy(() => import("./layout"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, []);
  return <p>Loading...</p>;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home/>} />
      <Route
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Layout />
          </Suspense>
        }
        errorElement={<ErrorPage />}
      >
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </>
  )
);

