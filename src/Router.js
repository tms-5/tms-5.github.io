import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from './Pages/Index.js'

export default function Router() {   
    return (
        <BrowserRouter>
            <Route exact path="/" component={Index} />
        </BrowserRouter>
    )
}