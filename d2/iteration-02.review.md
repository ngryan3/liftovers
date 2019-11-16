# lifTOvers Team 2 - Team # 7

## Iteration 02 - Review & Retrospect

 * When: Nov 13, 2019
 * Where: Robarts 5th floor, Study Room 3 @ 5pm EDT

## Process - Reflection


#### Decisions that turned out well

 * Team organization: we made an effort to isolate different areas so we could work without overlap or conflict. For example: Stacey worked on the dashboard, Andries worked on lift objects, Ryan and Tosin worked on the sign up/login, Faye worked on the volunteer create form, and Angela and Fillis worked on creating the database/deployment. This division helped us avoid conflicts in code. 
 * Group coding sessions: we had two group coding sessions which was really helpful in catching each other up on what we were doing as well as swapping problems for a new prespective when we were stuck on bugs/compile issues. This was a recent decision we made and seemed to streamline our progress quicker than before. Our group coding sessions were on Nov 1 and Nov 13, both at Bahen 3200. 
 * Help from liftovers teach lead: Abu from liftovers is the teach lead and when we were stuck with making API requests to get user obejcts, we asked him for help and he was able to spot the problem quickly. This was a successful decision as instead of struggling with it ourselves in a language we weren't comfortable in, we reached out, described the problem and diagnosis, and he was able to propose a solution. Screenshot of chat here: 
 <img src="https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d2/Screen%20Shot%202019-11-15%20at%203.45.55%20PM.png" />

#### Decisions that did not turn out as well as we hoped

 * Getting started quickly: We all struggled to get started with the code as our web app uses React and Express, and none of us had any prior experience with Javascript and these technologies. We had hoped to start coding earlier on but we had to learn a lot of new things such as the code structure and familiarize ourselves with the code base. This was most important because we often found ourselves behind schedule for certain features due to our lack of knowledge and experience. 
 * Team roles not being fulfilled as planned: We had specified team roles earlier on, and although some roles were useful, we realized that having a prior understanding of the code would have enabled us to create more specific and relevant roles for team members. For example, we had members in charge of front-end and back-end, but we ended up working more on specific features. 
 * Small design decisions: We were not familiar with React and packages, so we did not figure out a specific package we wanted to use, so we ended up using two separate packages. This made the UI inconsistent. For example, the "sign up" page and the "create volunteer" page used 2 different packages, and we need to change them. This was least important because it is not as important as a main feature. 
 
#### Planned changes

 * Have regular group coding sessions so we can keep on task with our progress and provide help/support as well as answer questions for for each other immediately. It's also a good way to plan set times to work on this project so we can have consistent progress. 
 * We haven't been using the project board extensively, but once the basics are laid down we will be creating issues for specific tasks such as: checking form validation for Create Volunteers form, checking form validation for Create Admin form, checking validation for Sign Up form, adding user authentication to the Sign In form. We will also be assigning people to these tasks and moving them through the project board based on status of the task.


## Product - Review

#### Goals and/or tasks that were met/completed:
 * Familiarize ourselves with the code base liftovers provided. This is obviously the most important as we had to understand a lot of new technology such as: Javascript, React web app structure, MongoDB, Express, etc.
 * Create mongoDB collections for volunteers, lifts and users. Connect the api to the database and create corresponding objects (i.e. models). We determined that this is most important after familiarizing ourselves with the code liftovers provided as we need data to work with and populate the views of our web app. Decision about models: Relationship between user and volunteer objects, where user has an attribute role which is either "admin", "volunteer", or "superAdmin". After having a conversation with liftovers' team lead, he really supported the decision and commended us on the industry standard we followed. 
 * On the webpages that display model information about volunteers and administrators, there are functionalities to display models in a table, and create models in a form by making GET and POST request to the api. The POST request has been done through a Create Volunteer/Admin form that includes form validation. As the web app is primarily an administrative tool, this was determined to be the next most important goal.
 * Create the main functionality of the dashboard by displaying priority information (filtering objects was not yet included). Similar reasoning as the point above, this is important for administrative workflows. 
 * (Not part of the original iteration plan) On the webpages that display model information about lifts, there are functionalities to display models in a table. This is important for future implementations such as post lifts, cancel lifts, etc.
 * Create the sign up page with form validation by creating certain requirements for each information field such as: alphanumeric characters only, must be exactly 6 characters... etc. An essential feature that we began working on in Deliverable 2.
 * Create the login page (no authentication). An essential feature that we began working on in Deliverable 2.
 * Familiarize ourselves with deployment process through Heroku so we aren't caught off guard when it comes to deployment time for Deliverable 2 Part 2. 

 **Links to Artifacts**
 * Create mongoDB collections. Volunteers: (https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d2/volunteer%20models.JPG). Lifts: (https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d2/lift%20models.JPG). Users: (https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d2/user%20models.JPG).
 * Volunteers table, Create Volunteer form: (https://liftovers-admin.herokuapp.com/volunteers).
 * Admins table, Create Admin form: (https://liftovers-admin.herokuapp.com/admins).
 * Dashboard: (https://liftovers-admin.herokuapp.com/dashboard).
 * Lifts table: (https://liftovers-admin.herokuapp.com/lifts).
 * Home page, Sign up form, Login form: (https://liftovers-admin.herokuapp.com).


#### Goals and/or tasks that were planned but not met/completed:
 * The dashboard does not display all information as planned such as posted requests, since there were some issues trying to display multiple function results. The focus was on implementing the controllers and models of the API and retrieving the information from the database. Displaying requested lifts was deemed more important since those lifts need to be approved by an admin.
 * The creation pages for admin and volunteer accounts do not have the same UI/UX, which would make navigating the app straightforward for users via a standardized, streamlined layout. The functionality of the pages were a more important feature to implement, so more time was focussed on that as opposed to their visual layout.
 * Deleting models (volunteers, admins, etc.) from the database has not been incorporated, because the test database we use is very small and there is no current need to begin deleting entries. For a large-scale database, this would be useful in filtering out inactive accounts so that there is less clutter in the entry list.


#### How was your product demo?
 * Preparation for Demo
    - Before meeting up with our partner, we double checked to make sure all our 
    features that we were presenting were working properly. Then we launched our 
    application from Faye's laptop to show our partners our current progress on 
    the project. 
 * Features Demoed
    - Sign in page
    - Sign up page with validation
    - Lift/Volunteer page for admins
    - Demonstrated Post request when creating a volunteer
    - Demonstrated a Get request when displaying all volunteers
 * Partner Acceptance of Features
    - Our partner had no complaints on the presented features 
 * Change Requests from Partner
    - Our partner really liked what we have done so far and didn't specify any changes that needed to be made.
 * What did you learn from the demo from either a process or product perspective?
    - We (inadvertently) followed industry standard for creating a user and volunteer object and linking these objects after the user 
    signs up 
    - We also learned that we need test cases for our application 

## Meeting Highlights

Going into the next iteration, our main insights are:
 
 * Complete action flow of website is determined and will be followed with minimal changes
    - The flow has been generally discussed with our partners and gotten approval. 
    - User (as a volunteer):
      <img src="https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d2/User%20Flow.png" />
    - User (as an admin/ super admin):
      <img src="https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d2/Admin%20Flow.png" />
 * Priority: focus on backend & for the above flow to work correctly
    - will have more people focus on backend coding (liftovers-api, especially controller)
    - tasks will be strict i.e. frontend only working on frontend, backend only working on backend. This is for max. efficiency and min. conflict. 
    - detailed tasks such as password encryption, distance algorithm optimization, will NOT be prioritized. Depending on how much time we have, we may or may not complete these tasks.
 * Roles may need to be changed/ emphasized
    - Each team member was assigned a major role at the beginning of the project (i.e. backend, fontend, testing, etc.)
    - However, due to the relatively small amount of coding and simple website features that we focused on for D2, the roles seem to be relatively "useless". 
    - Decisions may need to be made to modify roles. And as D3 starts and a more complicated web app will eventually be made, it seems necessary for these roles and corresponding resposibilities to be followed and met. 
