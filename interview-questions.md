# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To correct this mistake, I would go to my terminal to add a column, which I would name ‘cohort_id’ with an integer datatype.  Afterward, I would generate a migration to update the schema.  To clarify, the foreign key ‘cohort_id’ belongs to the Student model.

Researched answer: 

This is an easy fix and something that can happen by mistake.  To update our database with a foreign key, we should consider the name of the foreign key, the model the foreign key will go to, and the model it will be associated with. I would name the foreign key ‘cohort_id’ since it’s associated with the Cohort model. Since the Cohort model has_many students or a cohort can have more than one student, this indicates that the Student model should contain the foreign key because a student can belong to only one cohort. To add the ‘cohort_id’ column to the Student model, we can go to our terminal to run the rails generate migration command.  From there, we can go to our editor to update the newly created file to add a column to the Student model, named ‘cohort_id,’ and assign the data type as an integer.  From there, we can go back to our terminal to run the rails db: migrate command to save.


2. Which RESTful routes must always be passed params? Why?

Your answer: Four RESTful routes require params to be passed, which are show, edit, update, and destroy.  The purpose of the params is to identify a symbol in an object; in the case of the four RESTful routes,  the params determine the object's primary key.  Each RESTful route plays a specific role in our application. The show route is used to display a particular object in a database.  Then we have the edit route to modify an exact thing in a database.  There’s the update route that updates a specific object.  Lastly, there’s the destroy route, which allows us to delete a particular object from our database.  Within these four routes, the common theme is identifying a specific object.  Passing params through each route allows us to identify a particular object in a database and perform the desired action on the desired object.

Researched answer:  I like the above answer.  It's very conversational, and expands on the RESTful routes and their jobs within an application.

3. Name three rails generator commands. What is created by each?

Your answer: The three rails generator commands that come to mind are the rails generate model, rails generate migration, and the rails generate controller.  The generate model creates a table within a database with rows and columns, where each row is one object, and columns could be attributes or descriptions of the object.  The generate migration is used to update a database table, typically removing or adding columns.  The generate controller creates a controller within the application, which consist of logic and method defining how the user and application interact with the database.

Researched answer:  The three rails generator provided above is sufficient, along with their roles when creating and interacting with a database.  Two other rails generator that deserves mentioning are the resource and RSpec generators.  Respectively, one generator will create a model, controllers, views, routes, and model resources, while the other will create a testing suite. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
-	The controller method will be named ‘index,’ and the action performed will allow the user to see all students in the database.

action: "POST" location: /students
-	The controller method will be named ‘create,’ and the action performed will create a new student object in the Student table.

action: "GET" location: /students/new
-	The controller method will be named ‘new,’ and the action performed will create a form allowing a user to enter student information before utilizing the create method.

action: "GET" location: /students/2
-	The controller method will be named ‘edit,’ and the action performed will create a form that allows the user to edit a particular student object based on the primary key provided.

action: "GET" location: /students/2/edit
-	The controller method will be named ‘show,’ and the action performed will allow the user to see a particular object in the Student table when the applicable primary key is provided.

action: "PATCH" location: /students/2
-	The controller method will be named ‘update,’ and the action performed will update a particular object based on the edit form information edits the user entered in the edit method.

action: "DELETE" location: /students/2
-	The controller method will be named ‘destroy,’ and the action performed will delete a particular object in the Student table based on the applicable primary key.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see a list of tasks that includes due dates on a homepage.
2. As a user, I can create a task.
3. As a user, I can mark tasks as completed.
4. As a user, I can edit, update, or remove a task.
5. As a user, I can set a priority level for each task.
6. As a user, I can set reminders for any task.
7. As a user, I can move unfinished tasks to a different day.
8. As a user, I can create or login into my to-do list.
9. As a user, I can pin files to any task.
10. As a user, I can create and share a list of tasks with a team or specific individual.
