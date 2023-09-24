#Node.js (npm)
- npm is bundled with Node.js, so you need to install Node.js first.
- Go to the official Node.js website: https://nodejs.org
- Download the LTS (Long Term Support) version for your operating system.
- Run the installer and follow the instructions to complete the installation.

#MySQL
To launch MySQL on your local machine for free, you can follow these steps:

1. Download MySQL Community Edition:
   - Go to the MySQL Community Downloads page: [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)
   - Scroll down to the MySQL Community Server section and click on the "Download" button for your operating system.
   - On the next page, scroll down and click on the "No thanks, just start my download" link.
   - The download will start automatically.

2. Install MySQL:
   - Run the installer and follow the instructions. Then you will be directed to **MySQL configurator**

   - On the **Type and Networking** screen, leave the default settings and click Next.
   - Set a root password **ladys** for the MySQL Server. **Make sure to remember this password**, as you will need it to access the MySQL Server.
   - Go to **Apply Configuration** screen and Execute to complete the installation.

3. Start MySQL Server:
   - Once the installation is complete, you can start the MySQL Server.
   - On Windows, you can start the MySQL Server by opening the MySQL Command Line Client from the Start menu. Enter your root password when prompted.
   - On macOS, you can start the MySQL Server by opening the Terminal and running the command `mysql -u root -p`. Enter your root password when prompted.
   - On Linux, you can start the MySQL Server by opening the Terminal and running the command `sudo service mysql start`. Enter your root password when prompted.

To create a new database in MySQL for your movie review web app, you can follow these steps:

1. Open a command-line interface or a MySQL client (such as MySQL Workbench or phpMyAdmin) and connect to your MySQL server.

2. Once connected, you can execute the following SQL command to create a new database:

```sql
CREATE DATABASE NexusData;
```

Replace `movie_review_app` with the desired name for your database. This command creates a new database with the specified name.

3. After executing the command, you can verify that the database has been created by running the following command:

```sql
SHOW DATABASES;
```

