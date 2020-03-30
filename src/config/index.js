import 'dotenv/config';
import developmentENV from './env/development';
import prodENV from './env/production';
import testENV from './env/test'

const { NODE_ENV } = process.env;

const env = {
    test: testENV,
    development: developmentENV,
    production: prodENV
};

export default env[ NODE_ENV || 'development' ];