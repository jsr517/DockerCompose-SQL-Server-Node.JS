docker pull mcr.microsoft.com/mssql/server:latest
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=your_password" -p 1433:1433 --name sql1 -d mcr.microsoft.com/mssql/server:latest
