# DockerCompose-SQL-Server-Node.JS
Demo project to run sql server on docker and accessing database using Node.JS

First, make sure you have Docker installed on your machine.

Run the following command to pull the SQL Server image from Docker Hub:
docker pull mcr.microsoft.com/mssql/server:latest

Run the following command to start a new container and specify the environment variables for the SQL Server sa password and accept the EULA:
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=your_password" -p 1433:1433 --name sql1 -d mcr.microsoft.com/mssql/server:latest

Now, you can use Node.js and the mssql package to connect to the SQL Server instance running in the container.

Please check code files for more details.

Hope this was help full.

Regards 
Jarnail Singh
