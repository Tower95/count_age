# Count Age

This project take a source data from an endpoint and count the age and create a file `output.txt` with keys with the value 32.

## Pre requirements run time
- Nodejs 18+ 

or

- Docker


## Install Dependencies
this is necesary just on NodeJS

```bash
# install dependencies
npm install
```

## How to test
This project use Jest for testing

```bash
npm run test
```

## How to run
#### NodeJS
```bash
# Start Server
npm run start 

# Start Development Server
npm run dev
```

#### Docker
```bash
# Create the image
docker build -t countage . 

# Run Test on a container
docker run --rm -v ./:/home/node/app countage npm run test

# Run a container with the new image 
docker run --rm -v ./:/home/node/app countage
```

### Enjoy!!!

## Author
* **Ismael Torres** - [Github](https://github.com/Tower95)
