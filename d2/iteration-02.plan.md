# Web Application for lifTOvers/Liftovers Team 2

## Iteration 02

 * Start date: November 01, 2019
 * End date: November 11, 2019

## Process

After help from our project partner, we were able to get a basic React web app running. We started off with getting acquainted with their code base which is composed of the server side (API server) and client side (web app). Once we became familiar with the code structure, we were able to identify foundational tasks such as: creating user objects, creating routes for web pages, displaying data on web pages and working with their database. A decision we made was to create our own collections within their database to avoid conflict with the other liftovers team as well as the original data stored there. Key functionality we chose to implement for Deliverable 2 was: the user process of signing up/logging in and the admin process of creating volunteers and viewing priority items on the dashboard. These features were chosen and prioritized because logging in/signing up is vital for any user of the web app, and the admin processes serve the main purpose of the application for lifTOvers. We split up main tasks and ensured that they would not overlap in order to avoid any merging conflicts. 

#### Roles & responsibilities (Copied and Improved from D1)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We chose to have each team member in charge of an aspect of a project, and with that comes responsibilities to remind other team members about. All team members will be coding, and involved with every aspect, the following is simply a list of who is responsible for what aspect:
- UX/UI Design: Faye
- Front-end: Tosin 
- Back-end: Angela
- Communication with lifTOvers/Meeting set-up: Stacey
- Scrum master: Ryan
- Github Project Management: Andries
- Testing: Fillis  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Each member on the team is expected to code and contribute to each of the categories determined above and contribute to team discussions. 

**Faye**:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In charge of making sure UX/UI Design is approved by lifTOvers and complies with user design principles, will be responsible for organizing the completion of design section from team members.  Previously completed an internship at a research facility building a user portal web application. This iteration worked on: creating model pages for Volunteers and Admin, and the form used to make POST requests for creating new instances in the database. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical strengths and weaknesses:
- Strengths: Python, Java, HTML/CSS, Android Studio, REST API
- Weaknesses: C, Javascript, XML 

**Tosin**:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In charge of Front end completion and delegating front-end tasks. Responsible for organizing the completion of front end section with  team members. Previously completed a PEY at a Development Firm for the Ministry of Education. This iteration worked on: Creating front end pages for the sign up and Log in pages, also working on itegrating data captured with backend requirements. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical strengths and weaknesses:
- Strengths : Databases, Android Studio, html
- Weaknesses: C, C++, Javascript

**Angela**:   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In charge of Back-end end completion and delegating back-end tasks. Responsible for organizing the completion of Back-end section with team members. This iteration worked on: database design (with fillis); create mongoDB collections for lifts, volunteers, and users; deploy both api and web app to heroku.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical strengths and weaknesses:
- Strengths: Database, anything Java (Android Studio), Python also fine
- Weaknesses: C, Javascript

**Stacey**:   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In charge of communication with LiftOvers team. Responsible for taking minutes and keeping track of LiftOvers requests, data and information. This iteration worked on: added get requests for lifts, worked on dashboard front-end and functionality to display priority information.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical strengths and weaknesses: 
- Strengths: Java, Python, Android
- Weaknesses: Javascript, XML, databases

**Ryan**:   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Will be the Scrum master, In charge of tracking project progress and calling meetings depending on needs for project. In charge or maintaining proper progress of project in accordance with course requirements. This iteration worked on: creating sign in and sign up page with validation for users (with Tosin)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical strengths and weaknesses: 
- Strengths: Java, Python, Android, C
- Weaknesses: Java Script

**Andries**:   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Will be in charge of maintaining github synchronization. Also in charge of making sure github code is able to run smoothly. Tracking errors and Recording them. Will be in charge of testing code as well. This iteration worked on: implementation of Lifts to be created by admins and stored in the database.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical strengths and weaknesses: 
- Strengths: Java, C, Android Studio, Python
- Weaknesses: JavaScript

**Fillis (Zhuozi Zou)**:   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Will be in charge of testing code, making sure everything works. Also responsible that all functionality is tested before merging to master branch. This iteration worked on: implement Liftovers-api: models for volunteers, lifts, and users; database design (with Angela).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical strengths and weaknesses: 
- Strengths: Java, Python, Database, Android Studio, C
- Weaknesses: HTML, JavaScript, XML

#### Team Rules (Copied and Improved from D1)

**Communication**:   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We created a group chat on messenger to schedule team meetings which will happen every Friday at 3-5pm. If multiple members need clarification and help, we will set up group coding meetings in BA3200 so we can communicate face-to-face in order to resolve issues faster. If team members have questions about code, we will be using Slack, either through direct messaging or our team slack channel. We are also using Slack to communicate with lifTOvers for technical and functional questions. For technical questions, we will be directly messaging Abu, who is the technical lead of lifTOvers, and if we have questions about the product, we will be messaging the main slack channel. In order to come into contact with lifTOvers to set up meetings, Stacey is responsible for sending emails to them and corresponding. 
 
**Meetings**:   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Set up an Agile Project on Github to keep track of tasks certain team members are responsible for and their progress. If a team member is struggling with their assigned task and notifies this problem to the team early, we can assign another team member to either assist or swap tasks with each other, so we meet our goals for the week. During meetings we will also have standups facilitated by the scrum master to report what we have completed and plan for the next sprint. Sprints will be 2 weeks in length. Team members are expected to attend weekly team meetings on Fridays from 3pm-5pm, as there are no class conflicts then. If there is an emergency and someone is unable to make it to the meeting, that person is expected to communicate their absence as soon as possible and prior to the meeting (by 12 hours if possible). Members will rotate taking notes during meetings for future reference, and if a member was unable to make it they are responsible for reviewing the meeting notes. 
 
**Conflict Resolutions**:    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Non-responsive team members: If a team member remains unresponsive after 24 hours, as a team we will re-delegate tasks to someone else so we won’t fall further behind. When the non-responsive team member becomes available, we are going to have a serious team discussion. If they are consistently non-response, we will inform a TA/Instructor about this

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Personality Conflicts: If team members have an issue with each other, they can talk to a neutral third person to help solve the issues they have and learn to work with each other. If it stems from a technical issue in the code, it may require discussion among the group about the best route to take. If needed a poll will be conducted. For personality issues, if two members seem to clash frequently, other paired combinations may be an alternative to avoid unmediated partnership between them, or a third group member can work with them to mediate. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Scared to ask for help: Let everyone know on the team that its ok to ask for help and that everyone is willing to help each other out. No one has all the knowledge required for the project, but we all have our own specialties. If we notice team members who seem to struggle with a task, someone with confidence working in that area will reach out and work with them. 



#### Events

**Team Meeting 1**:
 * BA3200 @ November 1st, 3pm
 * After recieving code from Liftovers, and each member going through the code, we split up foundational tasks in such a way to minimize overlapping to avoid conflicts
 * Some members paired up to work on larger tasks together
 * Sharing knowledge to clarify questions about the code base, since each team member has a different skill set and understood separate parts of the code
 * See Artifact 1 at the bottom of the document
 
**Team Meeting 2**: 
* BA3200 @ November 11th, 6pm
* Group coding session, worked on Deliverable 2
* Explained what we had been working on and asked for help from other members if needed


#### Partner Meetings
 
**Meeting #1 with Liftovers**:
* Google Hangouts @ November 5th, 5pm
* Asked/clarified questions about the code, structure of the web app, and database 
* Clarified flow of url routings 
* Meeting notes at (https://docs.google.com/document/d/1C4RTLrdB0uTXHrOzk7oZSZfGIC7m6myIoUdALbqWAKc/edit)

**Meeting #2 with Liftovers**:
* Google Hangouts @ November 11th, 5pm
* Sprint demo meeting to review work done so far 
* Ask for any feedback or changes

#### Artifacts (Copied and Improved from D1)

List/describe the artifacts you will produce in order to organize your team.       

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  The main project management tool we will be utilizing is Github’s Project Management(https://github.com/orgs/csc301-fall-2019/teams/liftovers-team-2). 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We chose this because it is located where the repository is and is convenient and cohesive for keeping all the information together.
 - Keep a detailed log of important tasks that need to be completed for each project milestone
 - Each team member will be assigned tasks based on what we perceive to be the required skill set for the given task
    - The teammates more apt to working with that set of skills will complete that task
    - If a task requires additional work, or if help is needed, find a team member with similar strengths to assist in the work
    - A task of lower priority may be postponed if more important tasks are not completed, but NOT the inverse
- Tasks prioritized based on the following logic (along with team consensus):
   - Tasks that allow the program to function (Highest priority)
   - Tasks that would give some practical purpose to the program, according to the users’ perspective
   - Tasks that would make the program convenient for users
   - Tasks that would improve user experience beyond a fundamental level (Lowest priority)


#### Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

  We've asked our TA to disable direct push to master, but we have not heard back yet. Currently we have been working on the foundational code, so we have not experienced any overlaps. Members who pair up usually work together, and one partner pushes the code. We pull the repository before we push so we can merge our code with the present state of the repository. We decided to follow the existing structure of the lifTOvers source code, so we were able to get started on our tasks after familiarizing ourselves with the codebase. 
  
  Since much of these tasks were us getting started, we committed and pushed code right away. The Github project board details tasks we needed to complete, as well as some TODOs added along the way that are of immediate importance but are related to tasks we are working on now. For example, the login and sign up forms are created, and they have error checking for fields implemented, but no authentication yet. Authentication is a TODO task created along the way that will need to be completed for D3. 
 
 ## Overall deployment process
 
 The mongoDB database, provided by our partners, is already deployed on heroku using mLab. With permission, we were able to directly use this database and create collections for our own use. Before actual deployment, all code is run and tested locally using "yarn start". The api is run on localhost port 7000, and the web app is run on localhost 3000. When we run both at the same time, the web app can be used. To be clear: the web app (liftovers-admin) connects to the api (liftovers-api), and the api connects to the mongo database which is already deployed on heroku. Once all parts of the code for part 2 is done, and the web app works locally, it will be deployed on heroku directly through git. More details of how it's used is explained below.
 
 ## Deployment Tools
 
 We are using heroku for deployment. 
 Reason #1: our partners are using heroku to deploy the mongo database and their old api.
 Reason #2: we can use heroku directly through git which is very convenient. Also, since we do need to deploy the api and web app separately, heroku allows us to do so by creating multiple heroku git remotes, and use different sub-folders for the different remotes. This way, it is easy to control and update separate deployments, and deployment history & log files can be accessed using the heroku account used for deployment. 

## Product

#### Goals and tasks (From most to least important)
 * Familiarize ourselves with the code base liftovers provided. This is obviously the most important as we had to understand a lot of new technology such as: Javascript, React web app structure, MongoDB, Express, etc.
 * Create mongoDB collections for volunteers, lifts and users. Connect the api to the database and create corresponding objects (i.e. models). We determined that this is most important after familiarizing ourselved with the code liftovers provided as we need data to work with and populate the views of our web app.
 * On the webpages that display model information about volunteers and administrators, there should be functionality to display models in a table, annd create/delete models in a form by making GET, POST, and DELETE request to the api. As the web app is primarily an administrative tool, this was determined to be the next most important goal. 
 * Create the main functionality of the dashboard by displaying priority information such as: lifts with issues, lifts that need approval, and new volunteer accounts that need approval. Similar reasoning as the point above, this is important for administrative workflows. 
 * Create the sign up page with validation by creating certain requirements for each information field such as: alphanumeric characters only, must be exactly 6 characters... etc. An essential feature that we began working on in Deliverable 2.
 * Create the sign in page (no authentication). An essential feature that we began working on in Deliverable 2.
 * Familiarize ourselves with deployment process through Heroku so we aren't caught off guard when it comes to deployment time for Deliverable 2 Part 2. 

## Artifacts

**Artifact 1**
* This was the result of a team meeting. Link: (https://docs.google.com/document/d/1dMFKZrWy7_yQVfRMiFlUXHb3ec_xz6-6OjFASG-LS3k/edit)
* Purpose: We wanted to make sure all team members were on the same page about what information was necessary for volunteer users and
admin users. We drew diagrams of the main app to make sure that the models were constructed correctly. This determined what each type of user can see so that as a later TODO we can verify using this artifact that we achieved what we set out to do. 

**Artifact 2**
* To create user models in the database, we used this diagram from D1. Link: (https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d1/Screen%20Shot%202019-10-17%20at%209.44.05%20PM.png) and (https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d1/Screen%20Shot%202019-10-17%20at%209.44.11%20PM.png)
* Purpose: These model specifications were created using the descriptions Liftovers provided us and was reviewed by them. As such, they serve as a cohesive guide to what we want our models to look like and what attributes/permissions each has. 

**Artifact 3**
 * To create lift models in the database, we used this diagram from D1. Link: (https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d1/Screen%20Shot%202019-10-17%20at%209.44.11%20PM.png)
 * Purpose: This was useful in filtering out specific lifts for the dashboard since we wanted to view lifts based on their status so that an admin can see what lifts need action taken on them. This was also created using the description Liftovers provided us and was reviewed by them. 
 
**Artifact 4**
 * Create Volunteer Form. Link: (https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d2/Screen%20Shot%202019-11-11%20at%2010.45.43%20PM.png)
 * Purpose: Created using Artifact 2 as specifications for fields of the form. The fields have to match up with the user object because it creates an instance of a volunteer in the database using a POST request 
 
 **Artifact 5**
 * API for volunteers. Link: (https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d2/Screen%20Shot%202019-11-11%20at%2010.48.33%20PM.png)
 * Purpose: Showcases the link from the server side that contains the API for the models of our web app. The objects were created using Artifact 2 as reference and the link is where the POST request goes when a new instance is created. 

