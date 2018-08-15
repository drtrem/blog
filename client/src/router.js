import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import { BrowserRouter, Link, Router, Route } from 'react-router-dom';

// Layouts
import MainLayout from './components/main-layout';

// Pages
import Home from './components/home';
import CategoriesContainer from './components/category-container';
import Category from './components/category';
import PostsContainer from './components/post-container';
import Post from './components/post';

const Routers = () => (


  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="categories">
        <IndexRoute component={CategoriesContainer} />
        <Route path=":categoryId" component={Category}>
        </Route>
      </Route>
      <Route path="posts">
        <IndexRoute component={PostsContainer} />
        <Route path=":postId/:postName/:postContent/:postFile" component={Post} />
      </Route>
    </Route>
  </Router>
)

export default Routers;
