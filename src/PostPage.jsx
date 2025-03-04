import { useParams,Link } from "react-router-dom"
import DataContext from './context/DataContext';
import { useContext } from 'react';

const PostPage = () => {
    const {posts, handleDelect} = useContext(DataContext)
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return (
      <main className="PostPage">
          <article className="Post">
              {post && 
                <>
                  <h2>{post.title}</h2>
                  <p className="postDate">{post.datetime}</p>
                  <p className="postDate">{post.body}</p>
                  <Link to={`/edit/${post.id}`}>
                    <button className="editButton">Edit Post</button>
                  </Link>
                  <button className="deleteButton" onClick={() => handleDelect(post.id)}>
                    Delect post
                  </button>
                </>
              }
              {!post &&
                <>
                  <h2>POst Not Found</h2>
                  <p>Well, that's disappointing</p>
                  <p>
                    <Link to='/'>Visit Our HomePage</Link>
                  </p>
                </>}
          </article>
      </main>
    )
  }
  
  export default PostPage