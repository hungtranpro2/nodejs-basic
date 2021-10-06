import pool from "../configs/connectDB";

export const getHomePage = async (req, res) => {
  // logic

  const [rows, fields] = await pool.execute("SELECT * FROM `users` ");

  return res.render("index.ejs", { dataUser: rows });
};

export const getDetailPage = async (req, res) => {
  const id = req.params.userId;
  const [user, fields] = await pool.execute(
    "SELECT * FROM users WHERE id = ?",
    [id]
  );
  return res.send(JSON.stringify(user));
};
