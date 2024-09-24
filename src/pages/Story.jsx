import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Version from "../components/Version";
import Login_footer from "../components/Login_footer";
import Description from "../components/Description";
import Comments from "../components/Comments";

export default function Story() {
  const { id } = useParams();
  const location = useLocation(); // To get the current URL fragment
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

  // Scroll to the comments section when the page loads if the URL has #comments
  useEffect(() => {
    if (location.hash === "#comments") {
      const commentsElement = document.getElementById("comments");
      if (commentsElement) {
        commentsElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Story not found.</p>;

  return (
    <>
      <div className="bg-[#121212] text-white px-16">
        <Navbar />
        <Description
          key={post._id}
          title={post.title}
          content={post.description}
          author={post.overallAuthor}
          genre={post.genre}
          postId={post._id}
        />
        <div className="w-4/5 flex mx-auto">
          <Version versions={post.versions} />
        </div>
        <Comments />
      </div>
      <Login_footer />
    </>
  );
}
