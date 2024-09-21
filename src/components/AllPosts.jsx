import { useEffect, useState } from "react";
import Post from "./Post";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/stories/view"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-[#121212] px-16 h-full">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post._id}
            title={post.title}
            content={post.content}
            author={post.author}
            genre={post.genre}
            postId={post._id}
          />
        ))
      ) : (
        <p className="text-white p-8">Loading posts...</p>
      )}
    </div>
  );
}
