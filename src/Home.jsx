import Feed from "./Feed"
import DataContext from './context/DataContext';
import { useContext } from 'react';

const Home = () => {

  const {searchResults,fetchError,isLoading} = useContext(DataContext)

    return (
      <main className="Home">
          {isLoading && <p className="statusMsg">Loading post</p>}
          {!isLoading && fetchError && <p className="statusmsg" style={{color:"red"}}>{fetchError}</p>}
          {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/>: <p className="statusmsg">No post to display</p>)}
      </main>
    )
  }
  
  export default Home