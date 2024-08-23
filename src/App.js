import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { FontSizeProvider } from './contexts/FontSizeContext';
import Header from './components/Header';
import Home from './pages/Home';
import FindBuddies from './pages/FindBuddies';
import MyStudyGroups from './pages/MyStudyGroups';
import Profile from './pages/Profile';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/find-buddies" element={<FindBuddies />} />
                <Route path="/my-study-groups" element={<MyStudyGroups />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        </Router>
      </FontSizeProvider>
    </ThemeProvider>
  );
}

export default App;