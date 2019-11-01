const apidoc = require('apidoc');
const apidocToSwagger = require('./apidocToSwagger');

const generateSwagger = (src) => {
  const doc = apidoc.createDoc({src});
  const apiSpec = JSON.parse(doc.data);
  const projectSpec = JSON.parse(doc.project);
  
  return apidocToSwagger.toSwagger(apiSpec, projectSpec);
}

module.exports = generateSwagger;
