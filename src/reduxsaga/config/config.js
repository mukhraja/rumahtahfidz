const config = {
  domain: "http://localhost:2000/v1/api",
  // urlImageCure: "http://localhost:3001/codeid/api/curriculum_reviews/images",
  // urlImageInst: "http://localhost:3001/codeid/api/instructor/images",
  // domainAuth: "http://localhost:3001/codeid/api/auth",
  // urlImage: "http://localhost:3001/codeid/images",
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 2000,
  // jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
};

export default config;
