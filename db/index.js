import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase({
  name: 'Restaurants',
  location: 'default',
});

const executeQuery = (sql, params = []) => new Promise((resolve, reject) => {
  db.transaction((tx) => {
    tx.executeSql(sql, params, (tx, results) => {
      resolve(results);
    },
    (error) => {
      reject(error);
    });
  });
});

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

const createTable = async () => {
  const table = await executeQuery(tableQuery, []);

  return table;
}

let restaurants = createTable();
console.log(restaurants);

export default db;