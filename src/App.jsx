import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage}></Route>
        <Route path="/about" Component={AboutPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}
