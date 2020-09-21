## Drones Sample.

### Front-end

The Web application is using React + Redux, the API end-point to load the information about the drones fleet is called every second.

### Back-end

It is using Node.js + TypeScript and I am trying to simulate the drones moving my increasing the latitude and longitud every second. The API Server is listening on port 3001. 

http://localhost:3001/drones

### To Build and Run

Open a termianl and run:

`sh build-dev.sh`

The application should open into a browser window at http://localhost:3000

###  To-Do:

1. Finalize "dockerizing" the deployment. Probably putting the API also behind NGINX and using it a process manager load balancing several instances of the service.

2. Add unit testing using Jest + Enzyme to the front-end.

3. Add unit testing and end-to-end testing to the back-end. Using Mocha, Chai and Super Test.

4. It would had the drone trajectory to be a circle.