import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dclgwnvch",
  api_key: "283397251846212",
  api_secret: "roif6EClB4hseazULzUEU6VdIy0",
});

app.listen(4000, () => {
  console.log(`Server listening at port 4000`);
});
