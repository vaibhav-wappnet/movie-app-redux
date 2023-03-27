import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetail";
import PageNotFound from "../Pages/PageNotFound";

import React from 'react'

const MyRoutes = () => (
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/movie/' element={<MovieDetails />} />
        <Route path='/*' element={<PageNotFound />} />
    </Routes>
)

export default MyRoutes;