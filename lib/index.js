const apidoc = require('apidoc');
const apidocToSwagger = require('./apidocToSwagger');

const generateSwagger = (src) => {
  const doc = apidoc.createDoc({src});
  const apiSpec = JSON.parse(doc.data);
  
  return apiSpec;
}

module.exports = generateSwagger;
