import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "institute",
});

client.connect(()=>{
  console.log("Database connected successfully...")
});


export default client;
