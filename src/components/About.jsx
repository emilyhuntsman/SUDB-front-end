import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h1>SUDB (Straight Up Dope Books)</h1><br />
                <h3>Created by Emily Huntsman, Ashton RK Seibel, and Ali Rizvi ~ 2020 ~ All Rights Reserved</h3><br /><br />
                <h2>Introduction and User Stories</h2>
                <h2>Approach</h2>
                <p>This was a group project in which we first determined a common interest and landed on books! More specifically "Straight Up Dope Books" from here we created a wireframe, as seen in the image below:</p>
                <img alt="" src="./public/wireframe.png"></img>
                <p>From here we broke down the different aspects of the website into different components on a shared Trello Board and assigned to the group members based on competency and comfort level with technologies needed for that component. Our Trello board looked like this:</p>
                <img alt="" src="./public/ProjectBreakdown.png"></img>
                <p>After the breakdown our group developed our components dynamically around the other components in development and had daily meetings discussing merging code (via this repo), and other developmental aspects of the project. We hope you enjoy the results!</p>
                <h2>Technologies Used</h2>
                <h3>Full Stack Application Utilizing the Following Structures and Technologies: </h3>
                <ul>
                    <li>MERN Stack (Mongoose, Express, React, and Node.js)</li>
                    <li>MVC File Structure (Within Backend)</li>
                    <li>CRUD Routing for Models (Within Backend)</li>
                    <li>User Authentication Via BCrypt</li>
                    <li>Google Books API Integration</li>
                    <li>New York Times Bestseller API Integration</li>
                </ul>
                <h2>Known Bugs</h2>
                <h2>Forward Thoughts</h2>
                <h2>Credit Where Credit Is Due:</h2>
                <ul>
                    <li>Social Media Icons: https://www.flaticon.com/categories/social-media (Pixel Perfect, Free Pix)</li>
                    <li>Google API: https://developers.google.com/books</li>
                    <li>New York Times API: https://developer.nytimes.com/docs/books-product/1/overview</li>
                </ul>
            </div>
        )
    }
}
