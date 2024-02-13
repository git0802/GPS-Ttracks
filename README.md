This project actually contains two projects:
- A React.js application (i.e., the frontend)
- A backend API to which the React app can send GPS data to the database

You must run "npm install" in both project folders.

After that, you can start the backend API server via "npm start" (inside the "backend" folder).
The React app server is then also started via "npm start" (though inside the "frontend" folder).

You MUST have both servers (backend + frontend) running for the projects to work.

The backend API does use MongoDB database, which needs to be created and configured a ".env" file inside "backend" folder.

this .env file must contain:

DATABASE=string_to_connect_with_mongoDB
DATABASE_PASSWORD=string_password_to_mongoDBs
