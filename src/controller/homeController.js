import connection from "../configs/connectDB";

export let getHomePage = async (req, res) => {
  // logic
  let data = [];
  connection.query("SELECT * FROM `users` ", function (err, results, fields) {
    console.log(">>>> check mysql");
    console.log(results); // results contains rows returned by server

    data = results.map((result) => result);
    return res.render("index.ejs", { dataUser: JSON.stringify(data) });
  });
};
