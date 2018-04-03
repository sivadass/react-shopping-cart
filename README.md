# React Shopping Cart
Simple React Shopping Cart without using Redux

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/sivadass/react-shopping-cart) [![Github file size](https://img.shields.io/github/size/webcaetano/craft/build/phaser-craft.min.js.svg)](https://github.com/sivadass/react-shopping-cart) [![David](https://img.shields.io/david/expressjs/express.svg)](https://github.com/sivadass/react-shopping-cart)

![React Shopping Cart Preview](https://res.cloudinary.com/sivadass/image/upload/v1494752103/gifs/react-shopping-cart.gif)

## Live Demo
[https://sivadass.github.io/react-shopping-cart/](https://sivadass.github.io/react-shopping-cart/)

## Setup

Goto the project folder and install required dependencies:
```
npm install
```

Run Webpack to watch for code changes and bundle js and scss files:
```bash
# for development build
npm run dev

# for production build
npm run prod
```

Now run the express server
```bash
npm start
```

And finally open http://localhost:5600.


### Additional Info
* You may get **CORS** error, when running this app in your local machine. Open index.js and use **products.json** as url.

![CORS Error](https://res.cloudinary.com/sivadass/image/upload/v1495422162/screen-shots/url.png)

* I used localhost of my Wamp server to run this app, you can even use [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) to  create a handy *http* server or any other of your choice.
