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
            <Link to={`/blog/post/${post._id}`}><div className="row">
              <div className="col-4">
                <img  className="post-thumbnail" src={post.cover_image_src} />
              </div>
              <div className="col-7 post-title">
                <h1>{post.title}</h1>
                <h3>{post.description}</h3>
                <p className="time-stamp">{post.time_stamp}</p>
              </div>
            </div></Link>
          </div>
        )
      })
    ) : (
      <img className="loading" src="https://lh3.googleusercontent.com/-t-xfI89q2u7KdUYJOE-sqnd1MHE2j0Eo8ENuHNmofGshIR4uaBv-gQuaUysw5ORkT95HkCAqvqK-O7pCMpFNQSEzIeWOI_fMvT0tyNj6w2U9lXUvlPQC5LQWX7v7M6-W1QQcTu4CcArCN-557LST2X4lb2g0Lyj84mJjhFnwpRywVDANxvYCGNvM7764PnRL4EMxnLWD-ca0GjnlitWsI4-LYjX6jJVgECkHKQWFh1FlAniFNgujbkB5KE3P-dm5Ghskekpt9nEt4OkIOUE3VECdDtJWJ6TEJBJ5v0gJBVToEhL9pTDTw7Oam4Z8YhIdDHPKI__lsQwKBK7rxfHgrHnYpkDl55D4bbcdZiClr-zkc94hcrUWlSvi9LOOEn89t47Y4YFEmeEL5W1uTGwD7iTjOkOscDUN4kfKssAEGfNyTTDsOPBGowMJrWhPqChcFaujJR9xIdbE5UAmzFDziufRIhr2P7isVHGLtP112hCaCAfBkCJhQzXeDW3a2uALh_gSyE3wIyClZltB-ZweQlkm3fY--Wp6ptUFbc-VrpnxjqFq4ik8IMLNja7R_4spkX-jlLNmrii1ukQMavnQHpy_SG8E1BpTPPxxnlX8_UlyJySs-LH8uXiRAQKEqjN0yJ92ywcFgZZYGaU47FscwuDbdD3QEz6iKGjyENKgzrbhcPpa6fQ_fAVBZhUBsNkpzpWm95mult8sNJOMZ9ZzLYjLurIdue9royQqDqc2qFLXDO0vqE6J4DGLWhO771O_0O-i3whjJGcMyP4H6cimpE0JHEY9dG26xUH19g_9UYAzksuNxKRVJqeGymbcDgs8Wmjbqms-fUV3mXQoMwo5rxqMqSTJWNnEU1R9jG2RKTS4LczVNeWV4kwwAufVIEfPhNbcuuhqtN6kwFA9zoyEVKzk_Ji1TvqeWfoEG_5wVQB=w1240-h640-no?authuser=0" />
    )
  }

  return (
    <div>
      <div id="blog-posts-container">
        {renderPosts()}
      </div>
    </div>
  )
}

export default Blog;