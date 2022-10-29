import BlogItem from "../BlogItem";
import { useState, useEffect } from "react";
import "./index.css";

const BlogsList = () => {
  const [blogsData, setBlogsData] = useState([{
    id: 1,
    title: 'vasu',
    author: 'David',
    topic: 'ReactJs'
  }]);

  useEffect(() => {
    getDatFromAPI();
  }, []);

  const getDatFromAPI = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs")
      .then((data) => {
        return data.json()
      })
      .catch((error) => console.log(error))
    const updatedData = response.map((each) => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }));
    setBlogsData(updatedData);
  };

  return (
    <div className="blog-list-container">
      <h1>I am home</h1>
      {blogsData?.map((item) => (
        <BlogItem blogData={item} key={item.id} />
      ))}
    </div>
  );
}



export default BlogsList;
