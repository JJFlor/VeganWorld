# <VeganWorld>

## About The Project
![Veganworld](src/front/img/veganworld-homepage.png)

VeganWorld is a webpage where you can find any type of vegan services in your city.

This project was created to make it easier to find vegan services near you, since Google Maps filter for vegan places it's not always working properly, making it more difficult to find the services you're looking for. In this way, VeganWorld tries to fix this problem by offering an app where to find vegan services near them and get information about these places and being able to buy products for them at special prices offered only through the shop platform.

While developing this project we:
- Learnt how to create and application using React JS, Flask API and SQLAlchemy for backend integration.
- Improved our HTML and CSS usage by creating efficient grid UX and choose a nice color palette. 
- Improved our usage of API integration and how to configurate it.
- Learnt how to implement external API functionalities like Cloudinary, Google Maps and Flask mail.
- Improved our usage of Flask JWT to handle authentication processes and to define private areas for premium users.
- Implemented our own data base, creating SQL tables, and implemented the data structure flow and connections. All of that by using SQLAlchemy.

### Built With

- [React](https://reactjs.org)
- [Bootstrap](https://getbootstrap.com)
- [JQuery](https://jquery.com)
- [Node](https://nodejs.org/en)
- [SQLAlchemy](https://www.sqlalchemy.org/)
- [Flask](https://flask-jwt-extended.readthedocs.io/en/stable/index.html)
- [Cloudinary](https://cloudinary.com/)


## Installation

### Prerequisites
> If you use Github Codespaces (recommended) or Gitpod, this template will already come with Python, Node and the Posgres Database installed. If you are working locally make sure to install Python 3.10, Node.

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:
| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |
4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`
> Note: Codespaces users can connect to psql by typing: `psql -h localhost -U gitpod example`

### Undo a migration
You are also able to undo a migration by running
```sh
$ pipenv run downgrade
```
### Backend Populate Table Users
To insert test users in the database execute the following command:
```sh
$ flask insert-test-users 5
```
And you will see the following message:
```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```
### **Important note for the database and the data inside it**
Every Github codespace environment will have **its own database**, so if you're working with more people eveyone will have a different database and different records inside it. This data **will be lost**, so don't spend too much time manually creating records for testing, instead, you can automate adding records to your database by editing ```commands.py``` file inside ```/src/api``` folder. Edit line 32 function ```insert_test_data``` to insert the data according to your model (use the function ```insert_test_users``` above as an example). Then, all you need to do is run ```pipenv run insert-test-data```.

### Front-End Manual Installation:
-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.
1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```
## Usage

When you load the webpage you'll see the Homepage, but if you try to access to any part of it, you'll be asked to Sign Up or Log In. When you'll be at the Sign Up page, you'll have to register as a User or as a Business.
If you choose the Business Sign Up, you'll have to choose if you want a Free profile or a Premium one, just the second option will be allowed to add products and sell them at the web shop. When you're signed up you'll be redirected to your profile, where you'll be able to edit your info profile and to go see the shop, if you're a user, or to add a product and see your dashboard, if you're a business premium; or just see your personal info, if you're a business free.
I you choose go to Shop as a user, you'll be able to see all the products available at the shop and choose one and buy it. If you're a Business premium, you'll be able to add, edit, and delete products in your shop profile, and see your general shop.
When you're logged in, you'll be able to go to the business navbar button, that will navigate you to a page where you'll be able to select a service from the input (using "wellness", "shop", "restaurant" or "activism"); show or hide the map where the registered business appear, and see all of them together or filter them by category, when clicking the different category buttons.

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme


## Contributors
VeganWorld was build by [Jorge Yébenes](https://github.com/jorgeyebenes), [Sebastian Sarria](https://github.com/JSebasSN) and [Júlia Jaile](https://github.com/JJFlor).
The template that was used to build VeganWorld was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future implementations
- Blog forum, to allow users to create a vegan community online.
- Display business reviews.
- Add a "delete account" button on the profiles.
- Implement usage of AI to filter searchs and browse worldwide services to display.
- Improve the usage of Google Maps API to offer better mapping display.

## License

Distributed under the MIT License. See [MIT License](https://github.com/babel/babel/blob/master/LICENSE) for more information.











