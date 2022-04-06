import React from 'react';
import Layout from "../components/layout/Layout.jsx";
import Timer from "../components/timer/Timer.jsx";
import HomeSettings from "../components/homeSettings/HomeSettings.jsx";
import image from "../assets/download.jpeg";

const Home = () => {
    return (
        <>
            <Layout>
                <Timer />
                <HomeSettings />
            </Layout>
        </>
    );
}

export default Home;