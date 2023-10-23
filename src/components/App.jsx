import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
const ForgotPage = lazy(() => import("../pages/Forgot/Forgot"));
const PostsPage = lazy(() => import("../pages/Posts/Posts"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route
          path="/auth/signup"
          element={
            <RestrictedRoute redirectTo="/posts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/auth/login"
          element={
            <RestrictedRoute redirectTo="/posts" component={<LoginPage />} />
          }
        />
        <Route
          path="/auth/forgot"
          element={
            <RestrictedRoute redirectTo="/posts" component={<ForgotPage />} />
          }
        />
        <Route
          path="/posts"
          element={
            <PrivateRoute redirectTo="/auth/login" component={<PostsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
