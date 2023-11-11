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

4. Once connected, you can execute the following SQL command to create a new database:

```sql
CREATE DATABASE NexusData;
```

5. After executing the command, you can verify that the database has been created by running the following command:

```sql
SHOW DATABASES;
```
6. 改密码 （不改将无法修改数据库，原因请见 https://blog.csdn.net/kkkloveyou/article/details/91623834）
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ladys';
```
7. 插入示例数据
```sql
ALTER TABLE games MODIFY COLUMN id INT auto_increment;
INSERT INTO games
VALUES (1,"Minecraft","A sandbox game that allows players to build and explore virtual worlds "),(2,"Fortnite","A popular battle royale game where players fight to be the last person standing "),(3,"Grand Theft Auto V","An open-world action-adventure game that allows players to explore a fictional city and engage in various criminal activities."),(4,"The Legend of Zelda: Breath of the Wild","An action-adventure game set in an open world, where players control Link as he sets out to rescue Princess Zelda."),(5,"Overwatch","A team-based first-person shooter game where players work together to achieve objectives."),(6,"Call of Duty: Modern Warfare","A first-person shooter game that offers a realistic and immersive experience in modern warfare scenarios."),(7,"Super Mario Odyssey","A platform game featuring Mario as he embarks on a globe-trotting adventure to rescue Princess Peach."),(8,"FIFA 20","A soccer simulation game that allows players to control their favorite teams and compete in various tournaments."),(9,"The Witcher 3: Wild Hunt","An action role-playing game set in a vast open world, where players take on the role of Geralt of Rivia, a monster hunter."),(10,"League of Legends","A multiplayer online battle arena game where players control a champion and compete against other teams."),(11,"Pokemon Sword and Shield","Role-playing games where players embark on an adventure to become the champion of the Galar region."),(12,"Assassin's Creed Odyssey","An action role-playing game set in ancient Greece, where players control a mercenary and engage in various missions."),(13,"Red Dead Redemption 2","An open-world western action-adventure game set in the late 1800s, with players taking on the role of a outlaw."),(14,"Counter-Strike: Global Offensive","A multiplayer first-person shooter game where players compete in teams to complete objectives or eliminate opponents."),(15,"World of Warcraft","A massively multiplayer online role-playing game set in the fantasy world of Azeroth, with players completing quests and battling monsters."),(16,"Minecraft: Dungeons","A dungeon-crawling action-adventure game set in the Minecraft universe, with players battling through various levels."),(17,"Fortnite: Battle Royale","The battle royale mode of Fortnite, where players fight to be the last person or team standing."),(18,"Apex Legends","A free-to-play battle royale game where players team up to compete against other squads in a futuristic setting."),(19,"Super Smash Bros. Ultimate","A fighting game featuring characters from various Nintendo franchises, where players battle to knock opponents off the stage."),(20,"Animal Crossing: New Horizons","A life simulation game where players create their own island paradise and interact with anthropomorphic animal characters.")
```

