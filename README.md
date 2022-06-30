## General Assembly Software Engineering Immersive (March - July 2022)

# Project 4: Footballer Database

Table of Contents:

* Project Overview
* Brief
* Planning
* Approach taken
* Technologies Used
* Featured Code
* Key Learnings
* Challenges
* Bugs
* Future improvements
* [Visit the website!](https://marko-pokemon.netlify.app/)

## Project Overview

<img width="1307" alt="Player-Show-page" src="https://user-images.githubusercontent.com/101732786/176521673-4440065b-d8c9-4e17-a11a-ef2ee3c7aa70.png">

This is my fourth project at the end of the 13 week General Assembly Software Engineering Immersive program. It is a Full-Stack application with my own API. The idea was to have a database of one of my passions - football players. I was inspired to make the website as I frequently browse the website [transfermarkt.com](https://www.transfermarkt.com/) which I used as a guide for this project. I was really motivated for this project and had a lot of ideas, but of course within the timeframe and having under-estimated how long different components would take, I was able to complete considerably less within the 8 days we had to complete the project.

The application includes:

1) Home/Index Page
2) Footballer Show Page
3) Account Page
4) Search Results Page
5) Edit Footballer page
6) Register Page
7) Login Page
8) Nav Bar
9) Footer
10) GET/POST/PUT/DELETE functionality.

All content was sourced from [transfermarkt.com](https://www.transfermarkt.com/)

## Brief

* Build a full-stack application by making your own backend and your own front-end
* Use a Python Django API using Django REST Framework to serve your data from a Postgres database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality
* Implement thoughtful use stories/wireframes that are significant enough to help you know which features are core and which you can cut out
* Be deployed online


## Planning

Planning the project out was extremely useful, I would almost say that it was the most important part of the project. Having already done three projects prior to this one I realised that it was critical to compartmentalise this project into phases so that I could meet the MVP first before moving onto other phases. I separated the project into 4 phases and ended up only getting the first one done due to the time-frame.

#### Draft wireframe on paper
The first step in planning was to write up a draft wireframe on a bunch of A4 pages - I found it extremely useful to put my thoughts down on paper first before creating a digital wireframe.

#### Back-end Relationships diagram
Before completing the front-end wireframe, I designed the relationships model for the back-end using an [ERD](https://app.quickdatabasediagrams.com). As can be seen on the ERD there are 'one to many' and 'many to many' relationships with the 'User' and 'Footballer' models being the central models for the project. The Footballer, Review and Favourite models are accessible only through an authenticated User; whereas the Style and Continent models are related only to the Footballer model.

<img width="1502" alt="ERD" src="https://user-images.githubusercontent.com/101732786/176517918-c420e34c-7b8e-41ea-a280-3a4af0c2cb3b.png">

#### Complete wireframe on excalidaraw
As can be seen in the wireframe picture below, 4 phases were designed for the front end - the 1st phase was a MUST in order to meet the project requirements, with the other 3 phases good additions. The phases were colour-coded on the wireframe:
1) Phase 1 (Green) pages: Home; Player Show; Register; Login; Account; Add Footballer; Update Footballer; Nav Bar
2) Phase 2 (Orange) pages: User Reviews
3) Phase 3 (Blue) pages: User Favourited Players
4) Phase 4 (Red) pages: Continent page (only players from selected continent displayed)

![wireframe_footballer-database](https://user-images.githubusercontent.com/101732786/176519711-281461fd-6c7d-4426-8617-2c3bfe53cc18.png)

#### To-do list
Finally, to track my progress each day I would create a to-do list with taregets for the day, which I would tick off upon completion.

<img width="599" alt="To-do-list-example" src="https://user-images.githubusercontent.com/101732786/176653197-3027c0c7-d97a-4ce5-9898-540314f71c20.png">

## Approach Taken

Day 1:
* Create Git repository
* Design Back-End relationships
* Design Front-End wireframe
Day 2: Code Back-End
Day 3: Finished Back-End apart from API
Day 4: 
* Connect to Back-End to Front-End
* Create Home page, Nav Bar, Footer, Register/Login.
* Seeded Back-End API with 100 footballers.
Day 5:
* Style Home page
* Style Nav Bar
* Style Footer
* Style Register/Login pages
* Create and Style Footballer Show page
* Refactor Home page carousels using component files.
Day 6:
* Fix bug - pages weren't displaying
* Functionality to check that user = owner and display edit/update button on Footballer Show page
* Create 'Add Player' page
* Create 'Edit Player' page (same as create player but fields pre-filled)
* Create 'Account Page' with 'Add Footballer' button to navigate to 'Add Player' page
* Functionality to navigate away from 'Add Footballer' page if not logged in.
* Bug not fixed - 'Edit Player' page implementing changes only after refreshing page.
Day 7:
* Add ‘Delete Footballer’ button on Footballer Show page
* Bug fixed for changes to 'Edit Player' implemented only upon refreshing page
* Add 'Account' to Nav Bar
* Style all pages
Day 8:
* Styling the final product
* Added Search bar functionality

## Technology used:

#### Front-end:
* React
* JSX
* Axios
* SCSS
* Bootstrap
* React Router Dom

#### API:
* The 'pokeapi' is a huge library of Pokémon endpoints. We used a GET request to fetch all the 1126 Pokémon available (path='/pokemons') and a GET request to fetch individual Pokémon by name ('/pokemons/:name'). The other endpoints accessed were required for the Pokémon show page: stats and moves.

![Pokemon API document](https://user-images.githubusercontent.com/101732786/168439553-60f7d363-27e7-4362-b574-97a6742a8cad.png)

#### Dev tools:
* VS code
* Yarn
* Insomnia
* Git
* Github
* Google Chrome dev tools
* Excalidraw (Wireframe design)
* Netlify (deployment)

## Featured Code:

* This was the first project where we used an axios request to fetch data from a public API. It's a really simple piece of code but doing it for the first time was challenging. In this case, we have a useState() for pokemons which we update upon fetching data from the API and we also destructure { data } to have cleaner code. A good learning was also which dependencies to use at the end of the useEffect() - in this case, we use an empty array because we want the data to be fetched only once (upon initial render).

<img width="1158" alt="featured-code-project-2" src="https://user-images.githubusercontent.com/101732786/176465320-d336d1c5-accf-4f3f-be7a-73c1861d12d9.png">

## Key learnings:

* Learning to pair code and delegate tasks whilst working to meet a deadline;
* Consuming a massive API and prioritising which endpoints to fetch as the pokeapi is a huge API.
* Using Bootstrap to style the pages.
* Separating the .js files into deifferent components to make the code cleaner.
* Using React for the first time
* Using Insomnia for the first time
* Learning how to consume a public API
* Deployment on Netlify
* Axios requests
* SCSS

## Challenges:

* Creating the Pokémon evolution images and names to display correctly.

## Bugs

* No bugs apparently present. The API was clean and easy to fetch data from. We had our biggest issues with the Pokémon evolution feature - but we were able to solve that by creating a pokemonChain state which, if truthy, would engage evoData async function which would set the values of the evolution name and image.

## Future improvements

* Create buttons/links to access 100 Pokemon at a time - as the index displays all 1126 Pokémon which is a little untidy.
* Create filter for Pokémon displayed - for example Pokémon which were created in a certain year; strongest Pokémon; Pokémon with 3 evolutions and other variations.

## Visit the website:

* To visit the page, check out my [Netlify link](https://marko-pokemon.netlify.app/)
* To run on your local server, use 'yarn start'.
