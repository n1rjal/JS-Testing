module.exports = (table, filters) => {
  const allFilters = [];
  const { title } = filters;
  let query = `SELECT * FROM ${table} `;
  if (title) {
    allFilters.push(`title LIKE ${title}`);
  }
  allFilters.forEach((filter, index) => {
    if (index === 0) {
      query += `WHERE ${filter}`;
    } else {
      query += `AND ${filter}`;
    }
  });
};
