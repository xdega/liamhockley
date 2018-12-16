# liamhockley.me

The personal website for Liam Hockley

### Start Development Environment

`npm install`

`docker build <image name> .`

`docker container run: docker run -itp 8080:8080 <image name>`

Alternatively, you can find the live docker image associated with this project at:

https://cloud.docker.com/u/xdega/repository/docker/xdega/liamhockley

### NPM Scripts

`npm run lint` runs Eslint on JavaScript files, with no file edits.

`npm run fix` runs Eslint on JavaScript file, and edits files in place.

`npm run format` runs Prettier to format and edit files in place (including JSON, SASS, etc).
