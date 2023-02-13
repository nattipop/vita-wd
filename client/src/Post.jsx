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
    <div className="container">
      <Link to="/blog" className="back-button">{`<`}</Link>
      <img src={postData.cover_image_src} width="100%" />
      <h1>{postData.title}</h1>
      <p className="time-stamp">{postData.time_stamp}</p>
      <div className="container">
        <p>{postData.content}</p>
      </div>
    </div>
  ) : (
    <img className="loading" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-56-610_512.gif" />
  )
}

export default Post;