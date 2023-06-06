<h1>Task Management Application -Local Setup Documentation</h1>
<p>This documentation provides step-by-step instructions on how to set up and run the Task Management Application locally on your machine using PostgreSQL as the database.</p>

<h3>Prerequisites</h3>
<p>Before proceeding with the setup, ensure that you have the following prerequisites <br> installed on your machine:</p>
<ul>
  <li>Node.js</li>
  <li>Git</li>
  <li>PostgreSQL</li>
  </ul>
  
  <h3>Setup Instructions</h3>
  <ol>
  <li>Clone the Repository:</li>
  <p>Run the following command to clone the repository:</p>
  <code>git clone https://github.com/toxicbot04/task-management-app.git</code>
  <li>Install Dependencies:</li>
  <p>Navigate to the cloned repository's directory:</p>
  <code>Navigate to the cloned repository's directory:</code>
  <p>Run the following command to install the required dependencies:</p>
  <code>npm install</code>
  <li>Configure the Application:</li>
  <p>Create a .env file in the root directory of the project.</p>
  <p>Open the .env file in a text editor and set the following environment variables:</p>
  <code>PORT=3000
DATABASE_URL=postgresql://username:password@localhost:5432/task_management_app
  </code>
  <p>Replace username and password with your PostgreSQL credentials, and task_management_app with the name you want to give to your database.</p>
  </ol>
  <h3>Install PostgrSQL</h3>
  <p>Create a database</p>
  <h3>Start the Application:</h3>
  <p>Run the following command to start the application:</p>
  <code>npm start</code>
  <ul>Access the Application:</ul>
  <li>Once the application has started successfully, open a web browser.</li>
  <li>Visit http://localhost:3000 to access the Task Management Application.</li>
  
  
