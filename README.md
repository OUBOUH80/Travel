**Travel**

This is a travel website where users can explore various destinations, guides, and find useful information about different locations.
The users can also contact the guides and create an acount to save the locations they like.
The admin can add and update the locations and guid profiles.

**Features**

**-** View distinations and guide profiles.

**-** View distination details.

**-** User registration and login.

**-** For the admin: add, update and delete distinations and guide profiles.

**Architecture**

The project is composed into Three microservices contenerized containerized with docker:
   ui-microservice
   back-end microservice and mysql

<img width="201" alt="image" src="https://github.com/OUBOUH80/Travel/assets/76158315/219d6b31-bd88-49b1-9353-f6622dd63c17">








**Technologies used**

 -Front-end: TypeScript (Angular), HTML , css
 
 -Back-end: Spring boot
 
  -Data base: Mysql



**Setup instructions**

1: Clone the repository :

`git clone https://github.com/OUBOUH80/Travel.git `

2: Using your cmd, Access to Travel :

`cd Travel`

3: Launch the application using docker compose:

` docker-compose -f docker-compose.yml up `

4: Access the web site in your browser at `http://localhost:4200 `

5: You can also access the web services at `http://localhost:8080/travel/swagger-ui.html#/`

