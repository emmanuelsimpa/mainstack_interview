/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import "./App.css";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./component/ErrorPage";

const Layout = lazy(() => import("./layout"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='*' element={<Navigate to='/' />} />
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
    </>
  )
);
