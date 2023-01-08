import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import './App.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Reviews from './pages/Reviews/Reviews';
import WriteReview from './pages/writeReview/WriteReview';
import Profile from './pages/Profile/Profile'
import Login from "./pages/Login/Login"
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="about" element={<About />} />
                        <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="writereview" element={<WriteReview />} />
                        <Route path="book" element={<BookList />} />
                        <Route path="/book/:id" element={<BookDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
