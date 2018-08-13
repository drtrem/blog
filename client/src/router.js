import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import { BrowserRouter, Link, Router, Route } from 'react-router-dom';

// Layouts
import MainLayout from './components/main-layout';

// Pages
import Home from './components/home';
import CategoriesContainer from './components/category-container';
import CategoryList from './components/category-list';
import Category from './components/category';
import PostList from './components/post-list';
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
        <IndexRoute component={PostList} />
        <Route path=":postId" component={Post} />
      </Route>
    </Route>
  </Router>
)

export default Routers;
