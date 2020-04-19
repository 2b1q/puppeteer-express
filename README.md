# puppeteer-express

Node.js express hello world puppeteer example

## Run locally

### start node app locally

```sh
$ npm start
```

## Run in docker

### pull and run from docker-hub
```sh
$ docker run --rm -p 8080:8080 2b1q/ppt-express:init  
```

### Build and run locally
```sh
$ docker build -t ppt-express .
$ docker run --rm -p 8080:8080 ppt-express
```

## Usage
### Use curl or browser to call API
```sh
$ curl http://localhost:8080/goto/ya.ru
{"cmd":"goto","site":"ya.ru","result":"done"}
```