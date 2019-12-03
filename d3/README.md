# Web Application for lifTOvers/lifTOvers team 2 (Team #: 7)

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * The administrative web application we have built for lifTOvers will allow their management to view/edit/delete information about all participating parties involved in their organization, as well as manage food deliveries (AKA lifts). They are also able to approve of new users and facilitate the flow of lifts from beginning to end by changing their statuses (requested/posted/ongoing/completed/cancelled/problem). A dashboard presents a cohesive view of items that require attention, and an overview of the state of their organization. 
 * For volunteers, it serves as a platform where they can view their volunteer history through their past lifts, as well keep their profile updated with current, accurate personal information. 
 * Their current site (https://liftovers.ca/) serves as the point where lifts are created. Our administrative web application integrates with it by recieving created lifts from the current site, setting their status to 'requested', and providing means to facilitate the flow from lifts to 'completed' by approving statuses. 
 * Overall, the web app we are building is an administrative tool and allows its three types of users (volunteers, admins, superadmins) to monitor information they have access to, and edit/delete information they have permission to, providing lifTOvers with a clear representation of the current state of their organization. 

## Key Features
 
 * As we have three types of users that will be accessing the system, we will split the key features that a user can access into their respective permissions
 * Volunteer: A volunteer whose access has been approved by an admin/superadmin can log in and see lifts they participated in, as well as their own profile. They can edit their own profile. No other part of the administrative site is available for them to access. 
 * Admin: An admin can view/edit/delete lifts, volunteers, donors, and providers, and only view/edit other admins and superadmins. They will also be able to manage lifts by posting them or cancelling them. 
 * Superadmin: A super admin access all the features that the admin can, with the addition of a single feature: only superadmins may delete other admins and superadmins. 
 * The following venn diagram provides a succint overview of features each type of user of the system has access to: 
 <img src="https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d3/Screen%20Shot%202019-12-02%20at%209.25.39%20PM.png" />


## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * If you cannot deploy your application for technical reasons, please let your TA know at the beginning of the iteration. You will need to demo the application to your partner either way.
 * All users must register for the application by clicking the "Sign Up" button. After a user signed up, and an admin or superadmin has approved the user as a valid user (i.e. volunteer, admin, superadmin of lifTOvers), they will be able to login to the application. 
 * Volunteers will be able to see their dashboard with the lifts they have completed and the lifts they are currently volunteering for.
 * Volunteers will be able to see their profile and they can edit it by clicking on the "Edit" button. 
 * Admins and Superadmins will be able to see their dashboard with posted and ongoing lifts as well as lifts with issues and users that need to be approved. 
   - Posting Lifts: click the "Post" button for lifts in the Lifts: Awaiting Approval table in the dashboard. 
   - Cancelling Lifts: click the "Cancel" button for lifts in the Lifts: Awaiting Approval, Lifts: Posted, Lifts: Issues Found, Lifts: Ongoing tables in the dashboard. 
   - Approving Users: click the "Approve" button for users in the Users: Awaiting Approval table in the dashboard.
   - Deleting Users: click the "Delete" button for invalid users in the Users: Awaiting Approval table in the dashboard.
 * Admins and Superadmins can click the Lifts tab to view completed lifts.
 * Admins and Superadmins can click the Volunteers tab to view all volunteers and relevant information. 
   - Clicking the "Create Volunteer" button will redirect to a page that will allow the creation of a new volunteer. All necessary informtion must be filled in. 
   - Clicking the "View" button for a specific volunteer in the table will redirect to a page where all information about the volunteer can be viewed. There are "Edit", "Back", and "Delete" buttons on this page as well which will be described below. 
   - Clicking the "Edit" button for a specific volunteer in the table will redirect to a page where all information about the volunteer can be edit. There are "Cancel" and "Save Changes" buttons.
   - Clicking the "Delete" button for a specific volunteer in the table will redirect to a page that asks whether the admin/superadmin wants to delete the volunteer. There are "Cancel" and "Delete Volunteer" buttons.
  
 * Admins and Superadmins can click the Donors tab to view all donors and relevant information. 
   - Clicking the "Create Donor" button will redirect to a page that will allow the creation of a new donor. All necessary informtion must be filled in. 
   - Clicking the "View" button for a specific donor in the table will redirect to a page where all information about the donor can be viewed. There are "Edit", "Back", and "Delete" buttons on this page as well which will be described below. 
   - Clicking the "Edit" button for a specific donor in the table will redirect to a page where all information about the donor can be edit. There are "Cancel" and "Save Changes" buttons.
   - Clicking the "Delete" button for a specific donor in the table will redirect to a page that asks whether the admin/superadmin wants to delete the donor. There are "Cancel" and "Delete Donor" buttons.
   
* Admins and Superadmins can click the Admins tab to view all admins and relevant information. 
   - Clicking the "Create Donor" button will redirect to a page that will allow the creation of a new admin. All necessary informtion must be filled in. 
   - Clicking the "View" button for a specific admin in the table will redirect to a page where all information about the admin can be viewed. There are "Edit", "Back", and "Delete" buttons on this page as well which will be described below. 
   - Clicking the "Edit" button for a specific admin in the table will redirect to a page where all information about the admin can be edit. There are "Cancel" and "Save Changes" buttons.
   - Only Superadmins: Clicking the "Delete" button for a specific admin in the table will redirect to a page that asks whether the superadmin wants to delete the admin. There are "Cancel" and "Delete Admin" buttons.

* Admins and Superadmins can click the Providers tab to view all providers and relevant information. 
   - Clicking the "Create Provider" button will redirect to a page that will allow the creation of a new provider. All necessary informtion must be filled in. 
   - Clicking the "View" button for a specific provider in the table will redirect to a page where all information about the provider can be viewed. There are "Edit", "Back", and "Delete" buttons on this page as well which will be described below. 
   - Clicking the "Edit" button for a specific provider in the table will redirect to a page where all information about the provider can be edit. There are "Cancel" and "Save Changes" buttons.
   - Clicking the "Delete" button for a specific provider in the table will redirect to a page that asks whether the admin/superadmin wants to delete the provider. There are "Cancel" and "Delete Provider" buttons.
    
 ## Development requirements
 * For a developer to set this up on their machine, they will need to have Node.js installed. 
 * Instructions for setting up and running the lifTOvers application:
  1) Clone the repository using (https://github.com/csc301-fall-2019/team-project-liftovers-team-2.git)
  2) Navigate to the liftovers-api directory (i.e. using `cd liftovers-api`) and then run `npm install` to install all necessary packages for the API. 
  3) Run "npm start" to start the server. 
  4) Navigate back to the root directory (i.e. using `cd ..`) and then to the liftovers-admin directory (i.e. using `cd liftovers-admin`). Run "npm install" to install all necessary packages for the client.
  5) Run "npm start" to start the client.
  6) OPTIONAL: For testing changes to the API, the server needs to be run locally. To do this, navigate to liftovers-admin/api/config.js and comment out the line: `export default "https://liftovers-api.herokuapp.com";` and then uncomment the line: `export default "http://localhost:7000";`. Then restart the server and client by running `npm start` in their respective directories. 

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * The type of license we chose to apply to our codebase is The MIT License. 
 * The effects that this license has includes:
   - the codebase can be used freely if our license is included
   - the code can be modified and distributed
   - modifications can be sublicensed
 * We made this choice because we wanted our code to be openly used by lifTOvers. Extra features and other modifications can be added as needed to benefit their company. 
