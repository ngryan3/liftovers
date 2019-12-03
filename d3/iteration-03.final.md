# Web Application for lifTOvers/lifTOvers team 2 (Team #: 7)

## Iteration 03

 * Start date: November 23, 2019
 * End date: December 1, 2019

### Changes from your `product.md`

* Our partners requested that volunteers would be able to log in to the web application and upload images of their lifts (delivery of donated food). This is a significant change that we are foregoing due to time constraints to meet the deadline of the course. However, team members interested in continuing the project with lifTOvers will be trying to implement this feature in the future. This can be considered an "extra" feature, as this is not needed for administrative purposes, and is more for the purposes that admins will be able to download the image and share it to social media. As such, this was given low priority and reduced from our original scope. 
* Initially we detailed in D1 that we would have 3 user objects that would have login access to the web application: volunteers, admins, and superadmins. After realizing the 3 user objects shared many of the same fields (ex: name, surname, email, phone, preferred method of communication, etc.), we decided to make a user object with a role field that is filled with either "volunteer", "admin" or "superadmin". Then we also have a volunteer object that is associated with a user object if they volunteer that holds volunteer specific fields (ex: availability, are they licensed, if they own a vehicle, etc.). It actually saves redundant code since we have two user models instead of the exptected three! The tech lead from lifTOvers even commended on us for this decision, as he stated it was very standard in the industry to implement a similar practice. (A positive change!)
 * As there is an existing algorithm to map the closest volunteers to the lift that needs to be picked up, as a group we agreed in the very initial planning stages that priority level to optimize the algorithm would be low on our task list. This was also discussed with our project partners, and they agreed that this would a very low priority item to complete. 

### Handoff plan

 * We were transparent with our project partners and explained to them the re-scoping we did in the section above. Even though there is a due date for the course, a few of us stated that we would be interested in contining the project for lifTOvers if they would like us to. 
 * We will be creating a .zip file with our client side liftovers-admin repository and liftovers-api repository and sending it to liftovers' tech lead for review. The MongoDB database we are using currently is a temporary one we agreed in the beginning would be for development purposes and in no way interacts with their actual database. The tech lead is aware of how to make the switch to their official database should he wish. 
 * For their management, we will be sending them a link of our deployed product to review. If they have feedback/suggestions, we would be happy to make changes for their vision of the product. 
 * As there is another lifTOvers team, the management at lifTOvers will be reviewing both and making a decision about the future of both projects. 
 * Currently, lifTOvers has one tech person who is working remotely to maintain their current website at (https://liftovers.ca/). He works full-time and may be maintaining/developing our product in his spare time. To reiterate, a few of us on the team have communicated it to lifTOvers that we would be interested in maintaining/developing the product in our spare time/over winter break. 
 * After lifTOvers' management has reviewed the deployed product and their tech lead has had a look at the code base and a decision has been made, we will have a meeting to discuss the future of our project. 

