import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(5174, () => {
  console.log('Design System rodando em http://localhost:5174');
});
