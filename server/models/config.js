require('dotenv').config();

const dbUser = process.env.DBUSER;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;
const discardAfterXDays = 14;
const URI = `mongodb+srv://stevenwang03:5kQpMYNVdi3DhpYf@cluster0.x8xhfdw.mongodb.net/Spec_Sources_Collections?retryWrites=true&w=majority`;

module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays
};