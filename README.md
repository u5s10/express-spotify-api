# Express.js spotify proxy api
Simple web api made with express.js, this app will serve as a backend to an Angular app. This app acts as a proxy to spotify api, after each call to specific endpoint
application performs token based authorization, request resources and then returns those resources to the caller. Application was created to keep clientId and clientSecret 
from being exposed in Angular front end.
## Live demo
Application has been deployed on Heroku <br/>
Example request for artist: https://express-spotify-proxy.herokuapp.com/artists/0TnOYISbd1XYRBk9myaseg <br/>
Example request for search query "queen": https://express-spotify-proxy.herokuapp.com/tracks?q=queen <br/>
Example request for album: https://express-spotify-proxy.herokuapp.com/4aawyAB9vmqN3uQ7FjRGTy <br/>
## Installation

```bash
git clone https://github.com/u5s10/express-spotify-api.git
git cd express-spotify-api
npm install
```

## Running
After setting up enviroment variables for clientId and clientSecret run
```bash
node src
```
You can test this app by running a request in postman


## License
[MIT](https://choosealicense.com/licenses/mit/)
