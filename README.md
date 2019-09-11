# Base-Node-Js

Repo ini merupakan base dasar nodejs, menggunakan package :
* [yarn For Package Manager](https://github.com/yarnpkg/yarn)
* [Express For web Servers](https://github.com/expressjs/express)
* [Helmet For Security](https://github.com/helmetjs/helmet)
* [Body-Parser For Parsing JSON Body](https://github.com/expressjs/body-parser)
* [dotenv For Save ENV Config](https://github.com/motdotla/dotenv)
* [Nodemon For Tracking Change](https://github.com/remy/nodemon)
* [Axios For HTTP Request](https://github.com/axios/axios)

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
* Install Dependencies : `yarn install`
* Jalankan Command :  `yarn dev`
* Akses melalui `http://127.0.0.1:8001` atau `http://localhost:8001`
* Enjoy with NodeJS

# Table Route
| URL                               | TYPE | Fields                  |
| --------------------------------- | ---- | ----------------------- |
| http://localhost:8001/            | GET  | -                       |
| http://localhost:8001/hello       | GET  | -                       |
| http://localhost:8001/world       | GET  | -                       |
| http://localhost:8001/post/create | POST | `post`                  |
| http://localhost:8001/check       | POST | -                       |
| http://localhost:8001/httppost    | POST | `firstname`, `lastname` |

# Screenshoot
![post-create.png](/image/post-create.png)
![post-id.png](/image/post-id.png)
![axios-check.png](/image/axios-check.png)
![httpost.png](/image/httppost.png)