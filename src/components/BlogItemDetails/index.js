import "./index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogItemDetails = () => {
  const { id } = useParams();
  //console.log(id);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    return async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
      //console.log(response);
      const data = await response.json();
      //console.log(data);

      const updatedData = {
        id: data.id,
        title: data.title,
        imageUrl: data.image_url,
        avatarUrl: data.avatar_url,
        author: data.author,
        topic: data.topic,
        content: data.content,
      };
      console.log(updatedData);
      setBlogData(updatedData);
    };
  }, [id]);

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData;
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  return <div className="blog-container">{renderBlogItemDetails()}</div>;
};

export default BlogItemDetails;
