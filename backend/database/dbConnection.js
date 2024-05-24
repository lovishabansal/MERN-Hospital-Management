import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://lovishabansal110:lovishabansal@cluster0.bgdhz8u.mongodb.net/MERNSTACK", {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
