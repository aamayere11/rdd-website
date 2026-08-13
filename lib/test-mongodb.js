const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.log("❌ MONGODB_URI ba ta samu ba");
  process.exit(1);
}

const client = new MongoClient(uri, {
  family: 4,
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
});

async function test() {
  try {
    console.log("⏳ Connecting to MongoDB Atlas...");

    await client.connect();

    console.log("✅ MongoDB connection SUCCESSFUL!");

    await client.db("rddwebsite").command({ ping: 1 });

    console.log("✅ Database ping SUCCESSFUL!");
  } catch (error) {
    console.error("❌ MongoDB connection FAILED:");
    console.error(error);
  } finally {
    await client.close();
  }
}

test();