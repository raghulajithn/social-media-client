let BASE_URL = "https://post-it-heroku.herokuapp.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://social-media-app-2-0vp6.onrender.com/";
}

export { BASE_URL };
