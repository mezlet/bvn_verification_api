import 'dotenv/config';

const { DATABASE_PROD_URL } = process.env;

export default {
    DATABASE_URL : DATABASE_PROD_URL
};