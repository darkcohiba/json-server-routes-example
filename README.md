# JSON Server Routes Example
## Description
This project serves as an example of how to set up custom routes with json-server. It utilizes a simple database of movies and performers and showcases how to embed related data in responses using custom routes.

##Installation
###Install the required packages:

```bash
npm install
```
Start the backend server:

```bash
npm run server
```
To view the frontend:

Windows: 

```bash
explorer.exe index.html
```
Mac: 
```bash
open index.html
```
## Usage
Interact with the application through the opened index.html in your browser.

## API Routes

/movie: Fetchs all movies

/movies: Fetches all movies and embeds their associated performers.

Example: http://localhost:3000/movies
/movies/:id: Fetches a specific movie by its ID and embeds its associated performers.

Example: http://localhost:3000/movies/1
/performers: Fetches all performers.

Example: http://localhost:3000/performers
/performers/:id: Fetches a specific performer by its ID.

Example: http://localhost:3000/performers/1
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT

You can then use this README.md for your project repository.