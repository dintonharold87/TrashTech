# TrashTech
## Introduction
### The project
TrashTech is a garbage management web application that aims to streamline the process of garbage collection for both clients and administrators. The project focuses on creating a user-friendly platform where clients can register, make requests for their garbage to be collected, and track the progress of their requests. Administrators, on the other hand, have the ability to manage requests, register drivers and garbage trucks, and assign them to client requests.

TrashTech aims to simplify the garbage management process by providing a centralized platform for clients and administrators to interact and manage garbage collection requests effectively. It improves communication, ensures efficient allocation of resources, and enhances transparency throughout the process.
### User Stories
- As a client, I want to be able to register an account on the web application.
- As a client, I want to log in to my account to access my dashboard.
- As a client, I want to submit a request for garbage collection, providing details such as location, date, and type of garbage.
- As a client, I want to view the status of my garbage collection requests.
- As a client, I want to receive notifications or updates on the progress of my garbage collection requests.
- As an admin, I want to be able to register an account on the web application.
- As an admin, I want to log in to my account to access the admin dashboard.
- As an admin, I want to view a list of all garbage collection requests from clients.
- As an admin, I want to assign a driver and a garbage truck to a client's garbage collection request.
- As an admin, I want to view a list of all registered drivers and their details.
- As an admin, I want to view a list of all registered garbage trucks and their details.
- As an admin, I want to send responses to clients, providing information about the assigned driver, garbage truck, and collection schedule.
- As an admin, I want to be able to update the status of garbage collection requests (e.g., collected, in progress, completed).
- As an admin, I want to send notifications or updates to clients regarding the status of their garbage collection requests.

### The Context
This project is our Portfolio Project, concluding our Specializations Year at ALX software Engineering program. We were able to choose who we wanted to work with and what we wanted to work on, as long as we present a working program at the end of the two weeks of development.
### The Team
This project was developed by [Dinton Harold Ainemukama](https://www.linkedin.com/in/dinton-harold-ainemukama-518394157/) .
### Tutorial
[Here is a demo of how the web application works]()
## Usage
### Built with
- [React Js](https://reactjs.org/) 
- [Tailwind Css](https://tailwindcss.com/)
- [Material Ui]( https://material-ui.com/)
- [Node js](https://nodejs.org/)
- [Mongo db](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
### Installation
TrashTech requires [Node.js](https://nodejs.org/) v10+ to run.
Installing the programs necessary to view this project is pretty simple!
First clone the repo using
```git clone https://github.com/dintonharold87/TrashTech.git```
**Backend**
```sh
cd backend
npm i
npm run dev
```
This installs all the necessary  dependencies and devDependencies and start the  server.
**Frontend**
```sh
cd frontend
npm i
npm run start
```
This installs all the necessary  dependencies and devDependencies and start the react server. This command should be run in the frontend directory.
**API**
These are different api's created to perform crud operations
- Register a client
API endpoint:``` /api/clients```
Method: POST
- Register a admin
API endpoint:``` /api/admins```
Method: POST
Register a driver
API endpoint:``` /api/drivers```
Method: POST
Register a garbage truck
API endpoint:``` /api/garbage-trucks```
Method: POST
- View all garbage trucks
API endpoint:``` /api/garbage-trucks```
Method: GET

#### Security
I used [bycrypt](https://github.com/kelektiv/node.bcrypt.js) which is a password-hashing function used to securely store passwords. It works by taking a password and hashing it multiple times with a salt, which is a randomly generated string of characters that is added to the password before hashing. The resulting hash is then stored in the database.
## Future
There are lots of improvements i need to make on this project because of time constraints, I wasn't able to implement everything I wanted to implement. 
## Author
Dinton Harold Ainemukama
If you would like to contact [Dinton](https://www.linkedin.com/in/dinton-harold-ainemukama-518394157/) about any opportunities, feel free to reach out!
## Acknowledgements
- [ALX SE](https://www.alxafrica.com/software-engineering/) staff - For the help, advice and resources they provided us with during this project and during all our curriculum.
- Cohort 7 students - For your friendship, invaluable support, and insight not only for this project, but over the nine months.
## License

MIT

