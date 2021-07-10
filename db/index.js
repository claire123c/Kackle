import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.restaurants');

const executeQuery = async (sql, params = []) => {
  return new Promise((resolve, reject) => {
  db.transaction((tx) => {
    return new Promise((res, rej) => {
      tx.executeSql(sql, params, (tx, results) => {
        console.log('test', results);
        resolve(results);
      },
      (tx, error) => {
        reject(error);
      });
    });
  }, (err) => {
    console.log('transaction', err);
  }, () => {
    console.log('success');
  });
})};

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

const queryTest = `CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)`;

const createTable = async () => {
  try {
    var table = await executeQuery(queryTest, []);
    return table;

  } catch (e) {
    console.warn(e);
  }
}

let restaurants = createTable();
console.log(restaurants, 'main');

export default executeQuery;