# Web Application for lifTOvers/lifTOvers team 2 (Team #: 7)

## Deployed Website:
https://liftovers-admin.herokuapp.com/

(API: https://liftovers-api.herokuapp.com/)

Accounts that can be used for testing:
* Volunteer: 1092318026@qq.com; Password: 123
* Volunteer: omisoretosin@yahoo.com; Password: 123
* Volunteer: superAdmin@mail.com; Password: 123

## Description 
 * The administrative web application we have built for lifTOvers will allow their management to view/edit/delete information about all participating parties involved in their organization, as well as manage food deliveries (AKA lifts). They are also able to approve of new users and facilitate the flow of lifts from beginning to end by changing their statuses (requested/posted/ongoing/completed/cancelled/problem). A dashboard presents a cohesive view of items that require attention, and an overview of the state of their organization. 
 * For volunteers, it serves as a platform where they can view their volunteer history through their past lifts, as well keep their profile updated with current, accurate personal information. 
 * Their current site (https://liftovers.ca/) serves as the point where lifts are created. Our administrative web application integrates with it by recieving created lifts from the current site, setting their status to 'requested', and providing means to facilitate the flow from lifts to 'completed' by approving statuses. 
 * Overall, the web app we are building is an administrative tool and allows its three types of users (volunteers, admins, superadmins) to monitor information they have access to, and edit/delete information they have permission to, providing lifTOvers with a clear representation of the current state of their organization. 

## Key Features - General
 * Profile: A user who has login access can view their profile and edit their own information to keep it updated.
 * Dashboard: The dashboard contains information that currently have high priority, and needs action taken by admins. These actions involve: approving new users, viewing lifts that have problems, posting lifts awaiting approval so that volunteers receive text messages asking if they would like to complete a lift delivery.
   * Approving New Users: individuals who are newly acquainted with liftovers can be approved by pressing the "Approve" button on the table titled "Users Awaiting Approval" 
   * Lifts with Issues: Lifts with a status of "problem" will appear here for investigation from the admins.  
   * Users Awaiting Approval: Users can be approved or declined at the push of a button. 
   * Posting a Lift: Posting a lift on the dashboard wll send out a test message to volunteers (see image below), which they can accept following directions on the text to respond. The first volunteer who accepts the lift request will then be assigned to the lift, and the lifts status is set to "ongoing". 
    <img src="https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d3/78051292_1421566994676210_3516332576123912192_n.png" />
 * Login/Signup: Users can login using the login page, and signup using the signup page.
 * Forgot Password: If a user forgets their password, they can retrive it using the forgot password page, which upon completion will send them an email similar to the one in the image below to reset a password (see image below). <img src="https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d3/Forgot%20Password%20Email.png" /> 
 * View/Edit/Delete Volunteer: On the page for volunteers, there is a green view button to view all details, a blue edit button that directs to a form where a user can edit information, and a red delete button that asks for confirmation of deletion.
 * View/Edit/Delete Admin: On the page for admins, there is a green view button to view all details, a blue edit button that directs to a form where a user can edit information, and a red delete button that asks for confirmation of deletion.
 * View/Edit/Delete Donor: On the page for donors, there is a green view button to view all details, a blue edit button that directs to a form where a user can edit information, and a red delete button that asks for confirmation of deletion.
 * View/Edit/Delete Provider: On the page for providers, there is a green view button to view all details, a blue edit button that directs to a form where a user can edit information, and a red delete button that asks for confirmation of deletion.
 
 
## Key Features - Features Available to Each User Type
 * As we have three types of users that will be accessing the system, we will split the key features that a user can access into their respective permissions
 * Volunteer: A volunteer whose access has been approved by an admin/superadmin can log in and see lifts they participated in, as well as their own profile. They can edit their own profile. No other part of the administrative site is available for them to access. 
 * Admin: An admin can view/edit/delete lifts, volunteers, donors, and providers, and only view/edit other admins and superadmins. They will also be able to manage lifts by posting them or cancelling them. 
 * Superadmin: A super admin access all the features that the admin can, with the addition of a single feature: only superadmins may delete other admins and superadmins. 
 * The following venn diagram provides a succint overview of features each type of user of the system has access to: 
 <img src="https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d3/Screen%20Shot%202019-12-02%20at%209.25.39%20PM.png" />


## Instructions
 * All users must register for the application by clicking the "Sign Up" button which redirects to the signup page. After a user has signed up, and an admin or superadmin has approved the user as a valid user (i.e. volunteer, admin, superadmin of lifTOvers), they will be able to login to the application. 
 * Users that have signed up can log in by clicking the "Login" button which redirects to the login page. If they have forgotten their password, they can click "Forgot Password" to reset their password. An email will be sent with further instructions. 
 * Volunteers will be able to see their dashboard with the lifts they have completed and the lifts they are currently volunteering for.
 * Volunteers will be able to see their profile and they can edit it by clicking on the "Edit" button. 
 * Admins and Superadmins will be able to see their dashboard with posted and ongoing lifts as well as lifts with issues and users that need to be approved. 
   - Posting Lifts: click the "Post" button for lifts in the Lifts: Awaiting Approval table in the dashboard. 
   - Cancelling Lifts: click the "Cancel" button for lifts in the Lifts: Awaiting Approval, Lifts: Posted, Lifts: Issues Found, Lifts: Ongoing tables in the dashboard. 
   - Approving Users: click the "Approve" button for users in the Users: Awaiting Approval table in the dashboard.
   - Deleting Users: click the "Delete" button for invalid users in the Users: Awaiting Approval table in the dashboard.
 * Admins and Superadmins can click the Lifts tab to view completed lifts.
 * Admins and Superadmins can click the Volunteers tab to view all volunteers and relevant information. 
   - Clicking the "Create Volunteer" button will redirect to a page that will allow the creation of a new volunteer. All necessary information must be filled in. 
   - Clicking the "View" button for a specific volunteer in the table will redirect to a page where all information about the volunteer can be viewed. There are "Edit", "Back", and "Delete" buttons on this page as well which will be described below. 
   - Clicking the "Edit" button for a specific volunteer in the table will redirect to a page where all information about the volunteer can be edit. There are "Cancel" and "Save Changes" buttons.
   - Clicking the "Delete" button for a specific volunteer in the table will redirect to a page that asks whether the admin/superadmin wants to delete the volunteer. There are "Cancel" and "Delete Volunteer" buttons.
   
 * Admins and Superadmins can click the Admins tab to view all admins and relevant information. 
   - Clicking the "Create Donor" button will redirect to a page that will allow the creation of a new admin. All necessary information must be filled in. 
   - Clicking the "View" button for a specific admin in the table will redirect to a page where all information about the admin can be viewed. There are "Edit", "Back", and "Delete" buttons on this page as well which will be described below. 
   - Clicking the "Edit" button for a specific admin in the table will redirect to a page where all information about the admin can be edit. There are "Cancel" and "Save Changes" buttons.
   - Only Superadmins: Clicking the "Delete" button for a specific admin in the table will redirect to a page that asks whether the superadmin wants to delete the admin. There are "Cancel" and "Delete Admin" buttons.

 * Admins and Superadmins can click the Donors tab to view all donors and relevant information. 
   - Clicking the "Create Donor" button will redirect to a page that will allow the creation of a new donor. All necessary information must be filled in. 
   - Clicking the "View" button for a specific donor in the table will redirect to a page where all information about the donor can be viewed. There are "Edit", "Back", and "Delete" buttons on this page as well which will be described below. 
   - Clicking the "Edit" button for a specific donor in the table will redirect to a page where all information about the donor can be edit. There are "Cancel" and "Save Changes" buttons.
   - Clicking the "Delete" button for a specific donor in the table will redirect to a page that asks whether the admin/superadmin wants to delete the donor. There are "Cancel" and "Delete Donor" buttons.

* Admins and Superadmins can click the Providers tab to view all providers and relevant information. 
   - Clicking the "Create Provider" button will redirect to a page that will allow the creation of a new provider. All necessary information must be filled in. 
   - Clicking the "View" button for a specific provider in the table will redirect to a page where all information about the provider can be viewed. There are "Edit", "Back", and "Delete" buttons on this page as well which will be described below. 
   - Clicking the "Edit" button for a specific provider in the table will redirect to a page where all information about the provider can be edit. There are "Cancel" and "Save Changes" buttons.
   - Clicking the "Delete" button for a specific provider in the table will redirect to a page that asks whether the admin/superadmin wants to delete the provider. There are "Cancel" and "Delete Provider" buttons.
 
 ## Development requirements
 * For a developer to set this up on their machine, they will need to have Node.js installed. 
 * Instructions for setting up and running the lifTOvers application:
  1) Clone the repository using (https://github.com/csc301-fall-2019/team-project-liftovers-team-2.git)
  2) Navigate to the liftovers-api directory (i.e. using `cd liftovers-api`) and then run `npm install` to install all necessary packages for the API. 
  3) Run `npm start` to start the server. 
  4) Navigate back to the root directory (i.e. using `cd ..`) and then to the liftovers-admin directory (i.e. using `cd liftovers-admin`). Run `npm install` to install all necessary packages for the client.
  5) Run `npm start` to start the client on http://localhost:3000
  6) OPTIONAL: For testing changes to the API, the server needs to be run locally. To do this, navigate to liftovers-admin/api/config.js and comment out the line: `export default "https://liftovers-api.herokuapp.com";` and then uncomment the line: `export default "http://localhost:7000";`. Then restart the server and client by running `npm start` in their respective directories. 

 ## Licenses 

 * The type of license we chose to apply to our codebase is The MIT License. 
 * The effects that this license has includes:
   - the codebase can be used freely if our license is included
   - the code can be modified and distributed
   - modifications can be sublicensed
 * We made this choice because we wanted our code to be openly used by lifTOvers. Extra features and other modifications can be added as needed to benefit their company. 
