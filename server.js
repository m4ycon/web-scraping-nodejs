import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.use('/static', express.static(__dirname + '/public'));

import router from './public/router/router.js';
router(app);

app.listen(2020, function () {
  console.log(`Servidor rodando na porta 2020`);
});