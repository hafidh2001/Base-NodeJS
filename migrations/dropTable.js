const dropTable = [];

// query
const drop_admins = `DROP TABLE admins;`;
dropTable.push(drop_admins);

const drop_customers = `DROP TABLE customers;`;
dropTable.push(drop_customers);

export default dropTable;
