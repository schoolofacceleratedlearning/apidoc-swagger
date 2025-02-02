# apidoc-swagger

> It uses apidoc to convert inline documentation comments into json schema and later convert it to swagger json schema.

Uses the [apidoc](https://github.com/apidoc/apidoc) library.

## How It Works

By putting in line comments in the source code like this in javascript, you will get `swagger.json` file which can be served to [swagger-ui](https://github.com/swagger-api/swagger-ui) to generate html overview of documentation.

`/api/foo.js`:
```js
/**
 * @api {get} /user/id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
```

## Example
```js
import apidocSwagger from 'apidoc-swagger';

const swagger = apidocSwagger(__dirname + '/../src');
console.log(swagger);

```

## Installation

`npm install schoolofacceleratedlearning/apidoc-swagger`


Current version unlocks most of the basic capabilities of both projects and improvement is in progress.




Have a look at [apidoc](https://github.com/apidoc/apidoc) for full functionality overview and capabilities of apidoc.

To read more about how swagger works refer to [swagger-ui](https://github.com/swagger-api/swagger-ui) and [swagger-spec](https://github.com/swagger-api/swagger-spec) for details of `swagger.json`.
