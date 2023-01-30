import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';
import { Route, Routes} from 'react-router-dom';
import { DataProvider } from './context/DataContext';
// import { useEffect } from 'react';
// import useAxiosFetch from './hooks/useAxiosFetch';
// import { useStoreActions } from 'easy-peasy';

function App() {
  // easy peasy didnt work, may be outdated, commented out some 
  // easy peasy stuff, there are also commented out sections from before that

  // added this in when refactoring from context to easypeasy redux
  // const setPosts = useStoreActions((actions) => actions.setPosts);
  // const { data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  // useEffect(() => {
  //   setPosts(data);
  // }, [data, setPosts])

  //     IN LATER PART OF VIDEO THIS IS ALL PUT INTO THE DATACONTEXT FILE
  //      AND SENT TO COMPONENTS THROUGH CONTEXT RATHER THAN PROP DRILLING
  /* const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const { data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data]) */

/*   useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if(err.response) {
          //Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
        
      }
    }

    fetchPosts();
  }, []) */

 /*  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

      setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [ ...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate('/');
    }catch (err) {
      console.log(`Error: ${err.message}`);
    }
  } */

  return (
      <DataProvider>
        <Routes>
            <Route path='/' element={<Layout 
            />}>
              <Route index element={<Home
              />} />
                <Route path='post'>
                  <Route index element={<NewPost />} />         
                <Route path="/post/:id" element={<PostPage />} />
              </Route>
              <Route path='/edit/:id' element={<EditPost />} />
              <Route path='about' element={<About />} />
              <Route path='*' element={<Missing />} />
            </Route>
          
        </Routes>
      </DataProvider>
  );
}

export default App;
