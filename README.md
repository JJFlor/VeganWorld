# <VeganWorld>

## Description
VeganWorld is a webpage where you can find any type of vegan services in your city. 

This project was created to make easier for vegan people to find vegan services near them, since Google Maps filter for vegan places it's not always working properly, making more difficult for them to find the services they're looking for. In this way, VeganWorld tries to fix this problema by offering vegan people an app where to find this places and get information abou them and even buying from them through our shop platform. 

While developing this project we learnt about:
- How to create and application using React JS, Flask API and SQLAlchemy for backend integration.
- API integration and configuration.
- 

## Installation

> If you use Github Codespaces (recommended) or Gitpod this template will already come with Python, Node and the Posgres Database installed. If you are working locally make sure to install Python 3.10, Node 

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

## Usage

When uou load the webpage you'll see the Homepage, but if you try to access to any parte fo the homepage you'll be asked to Sign Up or Log In. When you'll be at the Sign Up page, you'll have to register as a User or as a Business. If you choose the Business Sign Up, you'll have to choose if you want a free profile or a premium one. When you'll be 
Proporcione instrucciones y ejemplos de uso. Incluya capturas de pantalla según sea necesario.

Para agregar una captura de pantalla, cree una carpeta `assets/images` en su repositorio y cargue la captura de pantalla en ella. Luego, con la ruta relativa, agréguela a su README utilizando la siguiente sintaxis:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Contributors

VeganWorld was build by [Jorge Yébenes](https://github.com/jorgeyebenes), [Sebastian Sarria](https://github.com/JSebasSN) and [Júlia Jaile](https://github.com/JJFlor). 

The template that was used to build VeganWorld was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. 


## License

We use npm packages. 











