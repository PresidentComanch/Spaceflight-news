import React from 'react';
import { Route, Routes } from 'react-router';

import ArticlePage from './components/ArticlePage/ArticlePage';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article/:articleId' element={<ArticlePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
