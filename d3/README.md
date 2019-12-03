# Web Application for lifTOvers/lifTOvers team 2 (Team #: 7)

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * The administrative web application we have built for lifTOvers will allow their management to view/edit/delete information about all participating parties involved in their organization, as well as food deliveries (AKA lifts). They are also able to approve of new users and facilitate the flow of lifts from beginning to end by changing their statuses (requested/posted/ongoing/completed/cancelled/problem). A dashboard presents a cohesive view of items that require attention, and an overview of the state of their organization. 
 * For volunteers, it serves as a platform where they can view their volunteer history through their past lifts, as well keep their profile updated with current, accurate personal information. 
 * Their current site (https://liftovers.ca/) serves as the point where lifts are created. Our administrative web application integrates with it by recieving created lifts from the current site, setting their status to 'requested', and providing means to facilitate the flow from lifts to 'completed' by approving statuses. 
 * Overall, the web app we are buliding is an administrative tool and allows its three types of users (volunteers, admins, superadmins) to monitor information they have access to, and edit/delete information they have permission to, providing lifTOvers with a clear representation of the current state of their organization. 

## Key Features
 * As we have three types of users that will be accessing the system, we will split the key features that a user can access into their respective permissions
 * Volunteer: A volunteer who's access has been approved by an admin/superadmin can log in and see lifts they participated in, as well as their own profile. They can edit their own profile. No other part of the administrative site is available for them to access. 
 * Admin: An admin can view/edit/delete lifts, volunteers, donors, and providers, and only view/edit other admins and superadmins. 
 * Superadmin: A super admin access all the features that the admin can, with the addition of a single feature: only superadmins may delete other admins and superadmins. 
 * The following venn diagram provides a succint overview of features each type of user of the system has access to: 
 <img src="https://github.com/csc301-fall-2019/team-project-liftovers-team-2/blob/master/d3/Screen%20Shot%202019-12-02%20at%209.25.39%20PM.png" />

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * If you cannot deploy your application for technical reasons, please let your TA know at the beginning of the iteration. You will need to demo the application to your partner either way.
 
 ## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).


 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?
