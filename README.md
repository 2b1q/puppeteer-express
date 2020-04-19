# puppeteer-express

Node.js express hello world puppeteer example

## Usage

### start node app locally

```sh
$ npm start
```
Use curl or browser to call API
```sh
$ curl http://localhost:8080/goto/ya.ru
{"cmd":"goto","site":"ya.ru","result":"done"}
```

### Run in docker

Build and run
```sh
$ docker build -t ppt-express .
$ docker run --rm -p 8080:8080 ppt-express
```
