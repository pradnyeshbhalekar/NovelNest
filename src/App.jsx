import React from "react";
import "./fonts.css";
import LoginPage from "./pages/auth-pages/LoginPage";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComicPage from "./pages/ComicPage";
import DetailPage, { BookLoader } from "./pages/detailed/DetailPage";
import MainLayout from "./layout/MainLayout";
import RegisterPage from "./pages/auth-pages/RegisterPage";
import DarkComedyPage from "./pages/DarkComedyPage";
import FantasyPage from "./pages/FantasyPage";
import DramaPage from "./pages/DramaPage";
import SciFiPage from "./pages/SciFiPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/cart" element={<h2>Your cart is empty</h2>} />
      <Route path="/comic" element={<ComicPage />} />
      <Route path="/books/:id" element={<DetailPage />} loader={BookLoader} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dark-comedy" element={<DarkComedyPage />} />
      <Route path="/fantasy" element={<FantasyPage />} />
      <Route path="/drama" element={<DramaPage />} />
      <Route path="/sci-fi" element={<SciFiPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
