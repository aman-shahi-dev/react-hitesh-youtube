import React, { useState, useEffect } from "react";
import postService from "../appwrite/services/post";
import { Container, BlogCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("hi");

  useEffect(() => {
    postService.getAllPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      } else {
        setMessage("No posts added");
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
