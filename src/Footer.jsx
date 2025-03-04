import DataContext from './context/DataContext';
import { useContext } from 'react';
const Footer = () => {
  const {posts} = useContext(DataContext)
  const today = new Date();
    return (
      <footer>
          <p>
            {posts.length} blog {(posts.length===1)? "post": "posts"}
          </p>
      </footer>
    )
  }
  
  export default Footer