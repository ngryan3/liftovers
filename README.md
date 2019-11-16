# PRODUCT INFORMATION

To access the product, go to the product URL listed below. We have included the deployed API URL as well. The routes that are relevant to Deliverable 2 are listed below each URL, as well as a brief description of what's going on at that page. 

### API URL (Server): https://liftovers-api.herokuapp.com/
#### Available routes: 
* https://liftovers-api.herokuapp.com/lifts
* https://liftovers-api.herokuapp.com/volunteer
* https://liftovers-api.herokuapp.com/user

### Product URL (Client): https://liftovers-admin.herokuapp.com/
#### Available routes: 
* https://liftovers-admin.herokuapp.com/ 
* https://liftovers-admin.herokuapp.com/login
* https://liftovers-admin.herokuapp.com/signup
* https://liftovers-admin.herokuapp.com/dashboard
* https://liftovers-admin.herokuapp.com/lifts 
* https://liftovers-admin.herokuapp.com/volunteers
  * Displays a table of information about Volunteers
  * Button on right side of screen directs /volunteer/create which is a form that creates new Volunteers
* https://liftovers-admin.herokuapp.com/volunteers/create
  * A form that creates a new Volunteer
  * When submitted, makes a POST request to the API to create a new Volunteer
* https://liftovers-admin.herokuapp.com/admins
  * Displays a table of information about Admins
  * Button on right side of screen directs /admins/create which is a form that creates new Volunteers
* https://liftovers-admin.herokuapp.com/admins/create
  * A form that creates a new Admin
  * When submitted, makes a POST request to the API to create a new Admin
