# Base-Node-Js

Repo ini merupakan base dasar nodejs, menggunakan package :
* yarn
* nodemon
* dotenv
* express

# Install NodeJS dan Yarn di Ubuntu

## Install NodeJS 10.x LTS
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash
sudo apt update
sudo apt -y install gcc g++ make
sudo apt -y install nodejs
```

## Install Yarn
```
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

# Start
* Clone Repo ini ke Local Komputer Anda
* Rubah file `.env.example` ke `.env`
* Jalankan Command :  `yarn dev`
* Akses melalui `http://127.0.0.1:8001` atau `http://localhost:8001`
* Enjoy with NodeJS