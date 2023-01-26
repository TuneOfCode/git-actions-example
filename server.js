const ronin = require("ronin-server");
const mocks = require("ronin-mocks");
const db = require("ronin-database");

async function bootstrap() {
  try {
    await db.connect(process.env.CONNECTIONSTRING);
    const server = ronin.server({
      port: process.env.SERVER_PORT,
    });

    server.use("/", mocks.server(server.Router()));
    const result = await server.start();
    console.info(result);
  } catch (err) {
    console.error(err);
  }
}
bootstrap();
