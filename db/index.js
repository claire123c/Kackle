import {Database} from "./database";

// import * as SQLite from 'expo-sqlite';
// const db = SQLite.openDatabase('db.restaurants');
const db = new Database("restaurants");

const tableQuery = `CREATE TABLE IF NOT EXISTS restaurants (
  id int PRIMARY KEY,
  name varchar(200),
  image_url text(2048),
  state varchar(50),
  phone varchar(30),
  price varchar(10),
  rating varchar(10),
  url text(2048),
  status varchar(30)
)`;

const query = `INSERT INTO restaurants (id, name, image_url, state, phone, price, rating, url, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
const data = ['id', 'name', 'image_url', 'state', 'phone', 'price', 'rating', 'url', 'LIKE'];

const dbQuery = async (query, params = []) => {
  let res;
  try {
    await db.transaction(async connection => {
      res = await connection.execute(query, params);
    });
  } catch(error) {
    return error;
  }
  return res;
}

// const dbQuery2 = (query, params = []) => {
//   db.transaction(tx => {
//     tx.executeSql(query, params)
//   }, (error) => {
//     console.error(error)
//   }, () => {
//     console.log('success')
//   })
// }

const createTable = async () => {
  await dbQuery(tableQuery, data);
}

createTable();
// dbQuery2(query);

export default dbQuery;