WYSA FULL STACK DEVELOPMENT TASK

Frontend -- ReactJS,HTML5/CSS3,Context API
Backend -- ExpressJS(NodeJS)
Database -- MongoDB Atlas

I have created backend usign ExpressJS and also implemented Authentication using JWT token 

Description about APIs

 [Question APIs](https://github.com/sanjheev100/wysa-FS/blob/main/server/routes/questionRoute.js)
 
 From the given screenshot(In word file) i assume that question type can be  (normal choose,time based question) so  during creation of [QuestionModel](https://github.com/sanjheev100/wysa-FS/blob/main/server/models/questionsModel.js) i added a array of options and type of question based on that question type we can render the UI in Frontend and also I have added adminChecker to create a question so only user with their role type admin can be able to create new question 
 
 
 [Answer APIs](https://github.com/sanjheev100/wysa-FS/blob/main/server/routes/answerRoute.js)
 
 To save answers from the the users i have created api and also in body it will send the question_id and its answers as key:value pair along with user id so that it will be like 1-1 relationship (answer-user) [Check AnswerModel](https://github.com/sanjheev100/wysa-FS/blob/main/server/models/answersModel.js) (Note : If the user tries to re submit the answer it will update the exisiting document in the Answers collection)

* All Question are coming dynamically from backend and also to add new question user needs be admin -- (i.e)  [AuthCheck Middlewares](https://github.com/sanjheev100/wysa-FS/blob/main/server/middlewares/authCheck.js)
* To submit answers user need to signup for the first with unique firstname

[Authentication APIs](https://github.com/sanjheev100/wysa-FS/blob/main/server/routes/authRoutes.js)
 * Signup -- User Can signup here with unique username and password once its done they can login to the account
 * login -- User Can login to view or submit the response to the form
 * userDetails -- this endpoint will fetch the details like role and _id whereever enduser performing actions that requires authentication checks
 * logout -- this endpoint will remove the token from the User's document in DB as well as from the cookie so they can't use the protected routes 
 [Check UserModel](https://github.com/sanjheev100/wysa-FS/blob/main/server/models/userModel.js)


[Live Deployment Link](https://wysa-client.herokuapp.com/)

