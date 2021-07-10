import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.restaurants');

const executeQuery = (sql, params = [], callback) => {
  db.transaction((tx) => {
      tx.executeSql(sql, params, (tx, results) => {
        console.log('test', results);
        callback(null, results);
      },
      (tx, error) => {
        callback(error);
      });
  }, (err) => {
    console.log('transaction', err);
  }, () => {
    console.log('success');
  });
};

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

const createTable =  () => {
  executeQuery(tableQuery, [], (err, data) => {
    console.log(data);
  });
}

let restaurants = createTable();
console.log(restaurants, 'main');

export default db;