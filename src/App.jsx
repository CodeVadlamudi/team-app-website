import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import BlogPostPage from "../pages/BlogPostPage";
import LoginPage from "../pages/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogPost" element={<BlogPostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
