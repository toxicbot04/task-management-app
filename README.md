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
  <ul>
  <li>Open pgAdmin, and in the left sidebar, expand the "Servers" group. Right-click on "Databases" and select "Create" > "Database".</li>
  <li>In the "Create - Database" dialog box, provide a name for your database in the "Name" field. Choose a meaningful name, such as "todos" or any name you prefer.</li>
  <li>In the left sidebar, expand the "Servers" group, then expand your server's name, followed by "Databases". Locate and expand the database you created earlier (in your case, "todos").</li>
  <li>Right-click on the "Tables" group under your database and select "Create" > "Table..." to open the "Create - Table" dialog box.</li>
  <li>In the "General" tab of the dialog box:

    In the "Table name" field, enter "todos" (or any other desired name for your table).
    Leave the "Schema" field as "public" (default).</li>
  <li>In the "Columns" tab, click on the "+" icon to add a new column. In the "Name" field, enter "id".</li>
  <li>Set the "Data type" of the "id" column to "serial" by selecting it from the dropdown menu. This will create an auto-incrementing integer column for unique IDs.</li>
  <li>Similarly, add two more columns:

    Name the second column "title" and set its data type to "text". This column will store the title of the todo item.
    Name the third column "completed" and set its data type to "boolean". This column will store the completion status of the todo item.</li>

  <h3>Start the Application:</h3>
  <p>Run the following command to start the application:</p>
  <code>npm start</code>
  <ul>Access the Application:</ul>
  <li>Once the application has started successfully, open a web browser.</li>
  <li>Visit http://localhost:3000 to access the Task Management Application.</li>
  
  
