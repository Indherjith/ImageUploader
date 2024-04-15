
# Image_Uploader

Image_uploader is a Full_Stack project made up of MERN stack. In this project, People can upload image and can get in another page.


## Table of Contents

- [1. Title and Description](#1-title-and-description)
- [2. Table of Contents](#2-table-of-contents)
- [3. Installation](#3-installation)
- [4. Usage](#4-usage)
- [5. Features](#5-features)
- [6. Contributing](#6-contributing)
- [7. License](#7-license)
## Installation

Install my-project with npm

Download code (or) Repository Clone to be used for getting the code in your local machine

- To start frontend

    Open Live server of file index.html inside the folder client

- To start backend

```bash
  cd server
  node index.js
```
    
## Usage/Examples

- Below link is for starting the front-end.
```
http://127.0.0.1:5500/client/index.html
```
 there we can upload images to the server.

 ```
 http://127.0.0.1:5500/client/Images.html
 ```
 In above link, we can get the uploaded images.


## Features

- Responsiveness
- Upload Image
- Get Image connection


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Environment Variables

To run this project, you will need to add the following environment variables to your /server/.env file

.env
```
PORT = 8080
MONGO_URL = here your Database COnnection URL
```

server.js
- Image Upload Request
`http://localhost:8080/uploadimg`

- Image Getting Request
`http://localhost:8080/images`

