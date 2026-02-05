import React, { useState, useEffect } from "react";
import postService from "../appwrite/services/post";
import { Container, BlogCard } from "../components/index";
import { useSelector } from "react-redux";

function Home() {
  
  const [posts, setPosts] = useState([])

  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  
  useEffect(() => {
    postService.getAllPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents)
        }
      })
  }, [])
  
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <div className="text-4xl font-bold">
                {authStatus ? (
                  <div>
                    <h1>Welcome, {userData.name}!</h1>
                    <p>No posts found</p>
                  </div>
                ) : (
                  "Login to see posts 👀"
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  
  return (
    <div className="w-full py-8 relative h-full">
      {authStatus && userData && (
        <div className="w-full text-center p-4 absolute left-0 top-0">
          <h1 className="text-2xl font-bold">Welcome, {userData.name}</h1>
        </div>
      )}
      <Container>
        <div className="flex flex-wrap mt-10">
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

export default Home;
