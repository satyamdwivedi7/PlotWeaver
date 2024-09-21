import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

export default function Story() {
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
  if (!post) return <p>Story not found.</p>;

  return (
    <div className="bg-[#121212] text-white px-16">
      <Navbar />
      <Post
        key={post._id}
        title={post.title}
        content={post.content}
        author={post.author}
        genre={post.genre}
        postId={post._id}
      />
    </div>
  );
}
