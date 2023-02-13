import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogData, setBlogData] = useState()

    useEffect(() => {
      fetch("/api/posts",{
        headers:{
          "accepts":"application/json"
        }
      }).then(
        response => response.json()
      ).then(
        data => {
          setBlogData(data)
        }
      )
    }, [])

  const renderPosts = () => {
    return blogData ? (
      blogData.map(post => {
        return (
          <div key={post._id} className="post-list-div">
            <div className="row">
              <img  className="col-3 post-thumbnail" src={post.cover_image_src} />
              <div className="col-9">
                <Link to={`/blog/post/${post._id}`}><h1>{post.title}</h1></Link>
                <h3>{post.description}</h3>
                <p className="time-stamp">{post.time_stamp}</p>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />
    )
  }

  return (
    <div>
      <div className="container" id="blog-posts-container">
        {renderPosts()}
      </div>
    </div>
  )
}

export default Blog;