import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="d" pageSize={5} country="in" category="general" />} />
          <Route path="/technology" element={<News key="a" pageSize={5} country="in" category="technology" />} />
          <Route path="/business" element={<News key="b" pageSize={5} country="in" category="business" />} />
          <Route path="/health" element={<News key="c" pageSize={5} country="in" category="health" />} />
          <Route path="/general" element={<News key="d" pageSize={5} country="in" category="general" />} />
          <Route path="/science" element={<News key="e" pageSize={5} country="in" category="science" />} />
          <Route path="/sports" element={<News key="f" pageSize={5} country="in" category="sports" />} />
          <Route path="/entertainment" element={<News key="g" pageSize={5} country="in" category="entertainment" />} />
        </Routes>
      </Router>
    );
  }
}
