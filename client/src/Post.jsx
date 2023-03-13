import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Post = () => {
  const [postData, setPostData] = useState();
  const { _id } = useParams()

  useEffect(() => {
    fetch(`/api/post/${_id}`, {
      headers:{
        "accepts":"application/json"
      }
    }).then(
      response => response.json()
    ).then(
      data => {
        setPostData(data[0])
      }
    )
  }, [])

  return postData ? (
    <div className="container" id="individual-post">
      <Link to="/blog" className="back-button">{`<`}</Link>
      <div className="flex-center">
        <img id="post-cover-image" src={postData.cover_image_src} width="100%" />
      </div>
      <h1 className="post-full-title">{postData.title}</h1>
      <h3 className="time-stamp">Written by {postData.author} on {postData.time_stamp}</h3>
      <div className="container post-full-content">
        <p>{postData.content}</p>
      </div>
    </div>
  ) : (
    <img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />
  )
}

export default Post;