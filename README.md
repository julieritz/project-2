# TinyLearn
## Link
https://young-retreat-53983.herokuapp.com/

## Presentation Link
https://docs.google.com/presentation/d/1JXmxZtZebX-B-ALyj9jkpHwie-qT1a-fuYIuYtoM7HY/
## Description
Bored? LEARN SOMETHING!

TinyLearn serves you one random subject to learn about a day. You can save your learns to keep on learnin' at a later time. With all the extra time we have nowadays, we hope TinyLearn can help make a big impact in your day.

This app uses MVC which includes a model, handlebars and a connection. Passport is used to make sure the user is logged in and can access certain pages associated with their account.

It uses sequelize to create a database and a seeder file for some pre-fed information.
## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributors](#contributors)

* [Tests](#tests)

* [Questions](#questions)
## Installation
Pull from this repository. Check dependencies and make sure to run npm i for all necessary- you will need:
- bcryptjs
- dotenv
- express
- express-handlebars
- express-session
- mysql2
- passport
- passport-local
- pg
- pg-hstore
- sequelize
## Usage
Use sequelize to get the database running. Make sure to run the command "npx sequelize db:seed:all" to add seeds.

Please pay attention to the .env.sample file. You will need to create your own .env file with the same parameters and your OWN credentials to use this app.

Navigate to the correct folder in your command line. Once there, enter "node server.js" in the command line to get the app started.

Enter "localhost:8080" into your web browser to view the app.
## License
None
## Contributors
Vinh Xiu Mao, Eric Purrington & Julie Ritz
## Tests
None - use console.log if you need to troubleshoot something.
## Questions
Reach out to us if you have any questions!

![image](https://user-images.githubusercontent.com/60047114/84955574-6135ca00-b0ac-11ea-913e-80c0f46e3065.png)
