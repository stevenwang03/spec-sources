require('dotenv').config();

const dbUser = process.env.DBUSER;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;
const discardAfterXDays = 14;
const URI = `mongodb+srv://stevenwang03:<password>@cluster0.x8xhfdw.mongodb.net/?retryWrites=true&w=majority`;

module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays
};