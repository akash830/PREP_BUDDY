/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js", // Path to your schema file
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
    out: "./drizzle", // Specify the output directory
};
