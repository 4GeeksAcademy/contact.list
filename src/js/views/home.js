// Home.js

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Contact from "./demo";

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadContacts(); 
    }, [actions]);

    return (
        <div className="container">
            <Contact />
        </div>
    );
};

export default Home;
