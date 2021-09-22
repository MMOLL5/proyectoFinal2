import knex from 'knex';

export const sqliteDB = knex({
  client: 'sqlite3',
  connection: { filename: './ecommerce.sqlite' },
  useNullAsDefault: true,
});

export const mySQLDB = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ecommerce',
  },
  pool: { min: 0, max: 7 },
});

sqliteDB.schema.hasTable('cart').then((exists) => {
  if (!exists) {
    console.log('NO EXISTE LA TABLA CART. VAMOS A CREARLA');
    sqliteDB.schema
      .createTable('cart', (table) => {
        table.increments();
        table.timestamp('timestamp').notNullable();
        table.string('product').notNullable();
      })
      .then(() => {
        console.log('SqLite DONE');
      });
  }
});

mySQLDB.schema.hasTable('cart').then((exists) => {
  if (!exists) {
    console.log('NO EXISTE LA TABLA productos. VAMOS A CREARLA');
    mySQLDB.schema
      .createTable('products', (productosTable) => {
        table.increments();
        table.timestamp('timestamp').notNullable();
        table.string('product').notNullable();
       })
      .then(() => {
        console.log('SQLDB DONE');
      });
  }
});