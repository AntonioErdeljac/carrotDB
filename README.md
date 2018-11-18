# CarrotDB

[![npm version](https://badge.fury.io/js/carrotdb.svg)](https://badge.fury.io/js/carrotdb)

> a JSON based database for Node.js

```js
carrotDB.create({ name: 'Antonio', surname: 'Erdeljac' });
```

## Usage

```sh
npm install carrotdb
```

```js
const carrotDB = require('carrotdb');

const app = async () => {
    try {
        await carrotDB.connect();

        const createdRecord = await carrotDB.create({ name: 'Antonio', surname: 'Erdeljac' });

        return console.log(createdRecord);
    } catch (error) {
        return console.log(error);
    }
}

app();
```

Data stored in JSON

```json
[
  {
    "name": "Antonio",
    "surname": "Erdeljac",
  },
]
```

## Install

```sh
npm install carrotdb
```

## API

__carrotDB.connect()__

Checks for a database & creates an empty folder with empty database if non existent.

```js
carrotDB.connect()
```

__carrotDB.create()__

Assigns a new object to database with generated id.

```js
carrotDB.create({ fieldName: ... })
```

__carrotDB.remove()__

Removes an object from database using id.

```js
carrotDB.remove(id)
```

__carrotDB.update()__

Updates an object from database using id.

```js
carrotDB.update(id, { fieldName: ... })
```

## Limits

I created it in 1 hour without testing so don't get any big ideas.