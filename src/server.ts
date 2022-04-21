import * as dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

// eslint-disable-next-line import/first
import app from './app/App';

app.listen(process.env.port || 8080, () => {
  console.log('Server is running!');
});
