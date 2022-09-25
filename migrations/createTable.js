const createTable = [];

// query
const create_admins = `CREATE TABLE IF NOT EXISTS admins
(
    admin_id serial PRIMARY KEY,
    email    VARCHAR ( 255 ) UNIQUE NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    created_date timestamp NOT NULL,
    modified_date timestamp NOT NULL
);`;
createTable.push(create_admins);

const create_customers = `CREATE TABLE IF NOT EXISTS customers
(
    customer_id serial PRIMARY KEY,
    email    VARCHAR ( 255 ) UNIQUE NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    created_date timestamp NOT NULL,
    modified_date timestamp NOT NULL
);`;
createTable.push(create_customers);

export default createTable;
