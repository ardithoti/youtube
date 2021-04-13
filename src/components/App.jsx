import React from "react";

import '../css/app.css';


import Header from "./Header";
import SideBar from "./SideBar"; 
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
    return(
        <Router>

            <Switch>

                <Route path='/home'>
                    <Header />

                    <div className="app_page">

                        <SideBar />
                        <RecommendedVideos />

                    </div>
                </Route>


                <Route path='/search/:searchTerm'>
                    <Header />

                    <div className="app_page">

                        <SideBar />
                        <SearchPage />

                    </div>
                </Route>

                <Route path='/trending'>
                    <Header />
                    <h3>Here trending</h3>

                </Route>

                <Route path='/subscription'>

                    <Header />
                    <h1>Subscription</h1>

                </Route>

                <Route path='/history'>

                    <Header />
                    <h1>History</h1>

                </Route>

                <Route path='/yourvideos'>

                    <Header />
                    <h1>Your Videos</h1>

                </Route>

                <Route path='/whatchlater'>

                    <Header />
                    <h1>Whatch Later</h1>

                </Route>

                <Route path='/likedvideos'>

                    <Header />
                    <h1>Liked Videos</h1>

                </Route>

            </Switch>

        </Router>

    );
}

export default App;