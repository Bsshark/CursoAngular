require('dotenv').config();
const {mkdirSync, writeFileSync} = require('fs')

const targetPath = './src/environments/environments.ts';

const envFileContent = `
  export const environment = {
    mapbox_key: "${process.env['MAPBOX_KEY'] }",
  }
`;

mkdirSync('./src/environments', {recursive: true});
writeFileSync(targetPath, envFileContent);
