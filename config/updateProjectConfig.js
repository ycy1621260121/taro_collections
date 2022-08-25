// eslint-disable-next-line import/no-commonjs
const fs = require('fs');
// eslint-disable-next-line import/no-commonjs
const path = require('path')
// eslint-disable-next-line import/no-commonjs
const project = require('./project');

const {readFileSync, writeFileSync} = fs;


function updateProjectConfig(filePath) {
  const fileOption = {encoding: 'utf-8'}
  const fileContent = readFileSync(filePath, fileOption);
  let Object = JSON.parse(fileContent.toString());
  console.log(project[project.projectName + '_' + 'appid'])
  Object.appid = project[project.projectName + '_' + 'appid'];
  let newStr = JSON.stringify(Object, null, 2)
  writeFileSync(filePath, newStr, fileOption);
}

updateProjectConfig(path.join(__dirname, '../project.config.json'))
