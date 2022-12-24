const config = {
  domain: "https://backend.pondoktahfidzquran.my.id/newbackend/v1/api",
  urlImage: "https://backend.pondoktahfidzquran.my.id/newbackend/v1/api/gambar",
  urlImageUser:
    "https://backend.pondoktahfidzquran.my.id/newbackend/v1/api/gambar/userdata",
  // domain: "http://localhost:3000/newbackend/v1/api",
  // urlImage: "http://localhost:3000/newbackend/v1/api/gambar",
  // urlImageUser: "http://localhost:3000/newbackend/v1/api/gambar/userdata",
  // domain: "https://newbackend.pondoktahfidzquran.my.id/newbackend/v1/api",
  // urlImageCure: "http://localhost:3001/codeid/api/curriculum_reviews/images",
  // urlImageInst: "http://localhost:3001/codeid/api/instructor/images",
  // domainAuth: "http://localhost:3001/codeid/api/auth",
  // urlImage:
  // "https://newbackend.pondoktahfidzquran.my.id/newbackend/v1/api/gambar",
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3001,
  // jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
};

export default config;
