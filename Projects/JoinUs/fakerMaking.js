connection.query(
  q,
  [$gmail, $yahoo, $hotmail],
  function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  }
);
