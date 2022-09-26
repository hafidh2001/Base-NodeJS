const createTable = [];

// query
const create_admins = `CREATE TABLE IF NOT EXISTS admins
(
    admin_id serial PRIMARY KEY,
    name     VARCHAR ( 255 ) NOT NULL,
    email    VARCHAR ( 255 ) UNIQUE NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    address   VARCHAR ( 255 ) NOT NULL,
    created_date timestamp NOT NULL,
    modified_date timestamp NOT NULL
);`;
createTable.push(create_admins);

const create_users = `CREATE TABLE IF NOT EXISTS users
(
    user_id serial PRIMARY KEY,
    name     VARCHAR ( 255 ) NOT NULL,
    email    VARCHAR ( 255 ) UNIQUE NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    address   VARCHAR ( 255 ) NOT NULL,
    created_date timestamp NOT NULL,
    modified_date timestamp NOT NULL
);`;
createTable.push(create_users);

const create_todos = `CREATE TABLE IF NOT EXISTS todos
(
             todo_id serial PRIMARY KEY,
             owner_id INT NOT NULL,
             list     VARCHAR ( 255 ) NOT NULL,
             created_date timestamp NOT NULL,
             modified_date timestamp NOT NULL, CONSTRAINT fk_user FOREIGN KEY(owner_id) references users(user_id) ON
DELETE CASCADE
ON
UPDATE restrict
);`;
createTable.push(create_todos);

export default createTable;
