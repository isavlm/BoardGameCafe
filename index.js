import app from './backend/config/app'
require("dotenv").config();

const server = app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Server live at http://${process.env.HOST}:${process.env.PORT}/api/boardgames`
  );
});

export default server;
