import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FAQ from "./pages/FAQ";
import Story from "./pages/Story";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Chapter from "./pages/Chapter";

const clientId =
  "444233035555-eiuu84mh3ieuunoeuddtpo2r83v6pei1.apps.googleusercontent.com";

function App() {
  const [loginType, setLoginType] = useState("");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Login setLoginType={setLoginType} />} />
          <Route path="/home" element={<Home loginType={loginType} />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/story/:id" element={<Story />} />

          {/* Chapter Route: Include versionIndex and chapterIndex as URL params */}
          <Route
            path="/story/:id/version/:versionIndex/chapter/:chapterIndex"
            element={<StoryWithChapters />}
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

const StoryWithChapters = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/stories/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const storyData = await response.json();
        setPost(storyData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <Chapter versions={post.versions} />;
};

export default App;
