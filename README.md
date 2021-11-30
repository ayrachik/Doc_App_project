# necktie-doctor-app

[Application link](https://ayrachik.github.io/necktie-doctor-app/)

**1.Choice of package**
Frameworks used: **Angular** and **Ionic**

**a. What's the purpose/importance of the package?**

-Angular:


-Modern and popular JS framework


-Ionic:
-Nice and responsive UI component(use of list, cards, inputs, buttons, dialogues, toasters...)

**b. What are the benefits & drawbacks associated with that choice?**

-Angular


-Improved Speed and Performance
-Programming style


-Ionic
-Follow the material design recommendations
-Coss platfrom and creates PWA natively
-Integrates Angular natively

**c. What are the assumptions underlying that choice?**
Users will use this app on their smartphones and tablets.

*NB*
Alternative for UI component: 
-Angular material: Not responsive: [Angular material link](https://material.angular.io/components/categories)
-Bootstrap +bootswatch theme: Materia:  [Bootstrap link](https://bootswatch.com/materia/)
**2.Potential Improvement**
1/Doctor's filter
2/Authentication features
3/See and manage bookings
4/Rating for doctors

**3.Production improvement**
CI scripts are located on the travis.yml file.

**4.Assumtions**
**a.Any assumptions you have made when you designed the data model and API
schema?**
When calling the API POST /bookging, no id nor status were required on the body of the request.

**b. Any other assumptions and opinions you have taken throughout the assessments?**
-I tried to make a aesthetic, useful, simple and intuitive user interface reducing the steps to make a booking.
-For booking logic, the booking taken is for soonest day possible for the hour asked.
-Many icons are added to show the loading phase, showing confirmation, showing errors...

-**For amelioration,** I suggest adding the authentication features so that the user can manage his bookings.
