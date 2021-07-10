import {Database} from "./database";

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

const createTable =  async () => {
  let res;
  await db.transaction(async connection => {
    res = await connection.execute(tableQuery);
  });
  return res;
}

const random = async () => {
  let restaurants = await createTable();
  console.log(restaurants, 'main');

}
random();

// let restaurants = createTable();
// console.log(restaurants, 'main');

export default db;