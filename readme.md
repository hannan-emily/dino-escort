# Dino Escort: Co-Winner of "Most Creative Hackathon App"

## Open the Live App Here:
Coming Soon.

## A MEAN Hackathon Project: Less than 24 hours to develop.
### Objectives
Use prior concepts like RESTful endpoints, JWT tokens, and MongoDB.
Create an E-Commerce application around the theme "Pre-historic".
Work in a team of two developers, in less than 24 hours. Present your functioning app to a panel of instructor & non-technical judges, as well as your peers.

### What is Dino Escort?
In pre-historic Panagea, easy access to transportation over large distances, challenging terrain and away from lethal predators is lacking. Dino Escort provides convenient, easy access to safe & reliable alternatives.

#### Travel by water, by land or by air.
Booking is easy in 2 steps, with details on each dinosaur's capacity & per/hour cost.
View your ride! We provide handy, illustrated portraits of each dinosaur compared to an average human.

#### Large party?
Book up to 100 people with our larger water or land dinosaurs.
#### Need to be there quicker than lava?
Our air escorts can take 1 or 2 people, and will avoid your terrestrial hassles of angry rival clans, T-Rex and other vicious predators.

### The Team Behind Dino Escort
Emily Hannan: React Component construction, front end styling, materialize framework, MongoDB debugging, custom graphic asset creation for dinosaurs using Photoshop
[Emily's GitHub](https://github.com/hannan-emily)
[Emily's Portfolio](http://ehannan.herokuapp.com/)

Brant Porter: MongoDB construction, authentication routes, Cart Component routing
[Brant's GitHub](https://github.com/brantchyoga)
[Brant's Portfolio](https://brantchyoga.github.io/portfolio-brantchyoga/)

## Final App Screenshots
Coming Soon.

## Routes
| Verb          | Path          | Action | Usage        |
| ------------- |---------------| -------|--------------|
| GET     		| /				| index  |	Homepage	|
| GET     		| /auth/signup	| new  	 |	Display form to create a new profile	|
| POST     		| /auth/signup  | create |	Create user account	|
| GET     		| /auth/login	| show   |	Display form to enter login info	|
| POST    		| /auth/login	| show   |	Authenticates user login info	|
| GET     		| /auth/logout	| index  |	Logs user out of the application	|


## Models & Sample Data
|id| name          | email          | password |
|--|------------- |---------------| -------|
| 2| Happy    		| happy@gmail.com			| $2a$10$Cnu/3QHw2WCaMo4xTfq5K.MTL9W2N4PDlA9t/0UOrj6I3A8c9GD7a  |

## Technology / Libraries Used
- React
- Javascript
- MongoDB
- Mongoose
- React
- Materialize

## Next Steps
1. Initial app design required immediate login or signup to access the app, as a way to head off security concerns for users to view & access the inventory of dinosaurs and drivers.
* Remove login page from home page, so users can view inventory
* Require login or signup instead during checkout for better user experience
