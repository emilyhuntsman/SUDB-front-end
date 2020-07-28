# SUDB (Straight Up Dope Books)
### Created by Emily Huntsman, Ashton RK Seibel, and Ali Rizvi ~ 2020 ~ All Rights Reserved

## Github Repositories:
Front End: https://github.com/root2point0/SUDB-front-end
Back End: https://github.com/root2point0/SUDB-api

## Hosted on Heroku at:
https://sudb-front.herokuapp.com/

## Introduction and User Stories
Welcome to Straight Up Dope Books! We share a passion for great books, and building beautiful websites! SUDB was developed as a full stack web application that utilizes a Google Books API to facilitate users adding books of their choosing to the "To Be Read" and "Already Read" lists. SUDB also utilizes a New York Times Bestseller API to introduce users to new books via our "Blind Date with a Bestseller Feature". Between the two of these main features we hope to solve the problem of "readers-block" - when you just can't decide what to read - one book at a time!

## Approach
This was a group project in which we first determined a common interest and landed on books! More specifically "Straight Up Dope Books"! We then created a wireframe, as seen in the image below:
![wireframe](/public/wireframe.png)

From here we broke down the different aspects of the website into different components on a shared Trello Board and assigned to the group members based on competency and comfort level with technologies needed for that component. Our Trello board looked like this:
![trello](/public/ProjectBreakdown.png)

After the breakdown our group developed our components dynamically around the other components in development and had daily meetings discussing merging code (via this repo), and other developmental aspects of the project. We hope you enjoy the results!

## Technologies Used
### Full Stack Application Utilizing the Following Structures and Technologies:
- MERN Stack (Mongoose, Express, React, and Node.js)
- MVC File Structure (Within Backend)
- CRUD Routing for Models (Within Backend)
- User Authentication Via BCrypt
- Google Books API Integration
- New York Times Bestseller API Integration


## Known Bugs
- Refreshing the page after logging in loses log in information, and the user must repeat the log in process to access and modify their lists.
- Responsive design not implemented.
- "Try Again" Button on Blind Date Component refreshes the page which in turn logs user out.
- Random Index on Blind Date Component doesn't reset between Category change, this sometimes won't render options correctly always.
- CSS code needs to be pruned for dryness.
- Redirect to login after sign-up not functional, nor redirect from successful login to home page.

## Forward Thoughts
- Fix bugs listed above.
- More sign-up information required in the future, in order to build out user experience via full account features, and email notifications/alerts.
- Edit footer to include social media links.
- Code needs pruning for dryness.

## Credit Where Credit Is Due:

- Google API: https://developers.google.com/books
- New York Times API: https://developer.nytimes.com/docs/books-product/1/overview

