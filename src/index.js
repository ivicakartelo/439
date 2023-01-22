import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import SinglePostPage from "./features/posts/SinglePostPage"
import AddPostForm from "./features/posts/AddPostForm"
import PostsList from "./features/posts/PostsList"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<React.StrictMode>
<Provider store={store}>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
    <Route
        index
        element={
          <>
          <h1>Home</h1>
          <AddPostForm />
          <PostsList />
          </>
        }
      />
    <Route path=":postId" element={<SinglePostPage />} />
    </Route>
    
     
  </Routes>
</BrowserRouter>
</Provider>
</React.StrictMode>
);