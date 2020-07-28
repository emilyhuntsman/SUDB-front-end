import React, { Component } from 'react'
import Wireframe from './wireframe.png'
import ProjectBreakdown from './ProjectBreakdown.png'
export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h1 className="about-title">SUDB (Straight Up Dope Books)</h1>
                <h3>Created by Emily Huntsman, Ashton RK Seibel, and Ali Rizvi ~ 2020 ~ All Rights Reserved</h3><br /><br />
                <h2>Introduction and User Stories</h2>
                <p>Welcome to Straight Up Dope Books! We share a passion for great books, and building beautiful websites! SUDB was developed as a full stack web application that utilizes a Google Books API to facilitate users adding books of their choosing to the "To Be Read" and "Already Read" lists. SUDB also utilizes a New York Times Bestseller API to introduce users to new books via our "Blind Date with a Bestseller Feature". Between the two of these main features we hope to solve the problem of "readers-block" - when you just can't decide what to read - one book at a time!</p>
                <h2>Approach</h2>
                <p>This was a group project in which we first determined a common interest and landed on books! More specifically "Straight Up Dope Books" from here we created a wireframe, as seen in the image below:</p>
                <img alt="" src={Wireframe} className="about-img" />
                <p>From here we broke down the different aspects of the website into different components on a shared Trello Board and assigned to the group members based on competency and comfort level with technologies needed for that component. Our Trello board looked like this:</p>
                <img alt="" src={ProjectBreakdown} className ="about-img" />
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
                <ul>
                    <li>Refreshing the page after logging in loses log in information, and the user must repeat the log in process to access and modify their lists.</li>
                    <li>Responsive design not implemented.</li>
                    <li>"Try Again" Button on Blind Date Component refreshes the page which in turn logs user out.</li>
                    <li>Random Index on Blind Date Component doesn't reset between Category change, this sometimes won't render options correctly always.</li>
                    <li>CSS code needs to be pruned for dryness.</li>
                    <li>Redirect to login after sign-up not functional, nor redirect from successful login to home page.</li>
                </ul>
                <h2>Forward Thoughts</h2>
                <ul>
                    <li>Fix bugs listed above.</li>
                    <li>More sign-up information required in the future, in order to build out user experience via full account features, and email notifications/alerts.</li>
                    <li>Edit footer to include social media links.</li>
                    <li>Code needs pruning for dryness.</li>
                </ul>
                <h2>Credit Where Credit Is Due:</h2>
                <ul>
                    <li>Google API: <a href="https://developers.google.com/books">https://developers.google.com/books</a></li>
                    <li>New York Times API: <a href ="https://developer.nytimes.com/docs/books-product/1/overview">https://developer.nytimes.com/docs/books-product/1/overview</a></li>
                </ul>
            </div>
        )
    }
}
