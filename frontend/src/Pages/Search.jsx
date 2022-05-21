import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import Card from "../Components/Search";

export default function Categories() {
  const [posts, setPosts] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Row>
        {posts
          .filter((post) => post.title.toLowerCase().includes(query))
          .map((post) => (
            <Card key={post._id} post={post} />
          ))}
      </Row>
    </>
  );
}
