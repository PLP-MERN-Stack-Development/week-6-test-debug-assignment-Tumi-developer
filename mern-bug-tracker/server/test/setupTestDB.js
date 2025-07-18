

const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

async function setupTestDB() {
  // Set up in-memory MongoDB server for testing
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  mongoose.set("strictQuery", false);
  mongoose.connect(uri, {
    useNewUrlParser: true, // These options are optional with latest Mongoose
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("Connected to in-memory MongoDB test database");
  });

  // To keep the server running (or you can implement tests right after)
  // This file can be extended or required in setupFilesAfterEnv in Jest config
}

if (require.main === module) {
  setupTestDB();
}

module.exports = setupTestDB;