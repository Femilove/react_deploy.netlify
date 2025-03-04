import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import EditPost from "./EditPost";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"; 
import { DataProvider } from "./context/DataContext";
// import {useState, useEffect} from "react"
// import {format} from "date-fns"
// import api from "./api/posts"
// import useWindowSize from "./hooks/useWindowSize";
// import useAxiosFetch from "./hooks/useAxiosFetch";


function App() {
  // const [posts, setPosts] = useState([])

  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const history = useNavigate();
  // const {width} = useWindowSize();

  // const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts')

  // useEffect(()=>{
  //   setPosts(data)
  // },[data])


  // // useEffect (() => {
  // //   const fetchPosts = async () => {
  // //     try{
  // //       const response = await api.get('/posts')
  // //       setPosts(response.data);
  // //     }catch (err){
  // //       if (err.response){
  // //         //NOt in the 200 response range
  // //         console.log(err.response.data);
  // //         console.log(err.response.status);
  // //         console.log(err.response.headers);
  // //       }else{
  // //         console.log(`Error: ${err.message}`)
  // //       }
  // //     }
  // //   }
  // //   fetchPosts()
  // // },[])

  // useEffect(() => {
  //   const filteredResults = posts.filter(post => 
  //     post.title.toLowerCase().includes(search.toLowerCase()) || 
  //     post.body.toLowerCase().includes(search.toLowerCase())
  //   );

  //   setSearchResults(filteredResults.reverse())
  // }, [posts, search])

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length -1].id + 1 :1;
  //   const datetime = format(new Date(), `MMMM dd, yyyy pp`);
  //   const newPost = {id, title:postTitle,datetime,body:postBody}
  //   try{
  //     const response = await api.post('/posts',newPost)
  //     const allposts = [...posts, response.data];
  //     setPosts(allposts);
  //     setPostTitle("");
  //     setPostBody("");
  //     history("/")
  //   }catch(err){
  //     console.log(`Error: ${err.message}`)
  //   }
  // }

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), `MMMM dd, yyyy pp`);
  //   const updatedPost = {id, title:editTitle,datetime,body:editBody}
  //   try{
  //     const response = await api.put(`/posts/${id}`,updatedPost)
  //     setPosts(posts.map( post => post.id===id? {...response.data}:post))
  //     setEditTitle("")
  //     setEditBody("")
  //     history("/")
  //   } catch(err){
  //     console.log(`Error: ${err.message}`)
  //   }
  // }


  // const handleDelect = async(id) => {
  //   try{
  //     await api.delete(`/posts/${id}`)
  //     const postList = posts.filter(post => post.id !== id);
  //     setPosts(postList);
  //     history('/')
  //   } catch(err){
  //     console.log(`Error: ${err.message}`)
  //   }
  // }
  const location = useLocation();

  
  // Define routes where Header and Nav should be displayed
  const isFooterVisible = location.pathname === "/";
  const routesWithHeader = ["/", "/about", "/post", "/edit"]; // Base paths only

  // Check if the current path matches any of the routes with Header and Nav
  const isHeaderVisible = routesWithHeader.some(route => {
    // Check for exact matches
    if (location.pathname === route) return true;
    // Check for dynamic routes
    if (route === "/edit" && location.pathname.startsWith("/edit/")) return true; // Matches /edit/:id
    if (route === "/post" && location.pathname.startsWith("/post/")) return true; // Matches /post/:id
    return false;
  });

  return (
    <div className="App">
      <DataProvider>

         {/* Conditionally render Header and Nav */}
         {/* Conditionally render Header and Nav */}
        {isHeaderVisible && <Header title="React Tutorial" />}
        {isHeaderVisible && <Nav />}
        

        <Routes>
          <Route 
              path="/" 
              element={<Home />}
            /> {/* Removed exact prop */}

            <Route path="/post" element={<NewPost />} />

            <Route path="/edit/:id" element={<EditPost/>} />

            <Route path="/post/:id" element={<PostPage/>} />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<Missing />} />
        </Routes>

        {isFooterVisible && <Footer />}
      </DataProvider>
    </div>
  );
};

export default App;