import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    // required: [true, "нэвтрэх нэрээ оруулна уу"],
  },
  password: {
    type: String,
    // required: [true, "нууц үгээ оруулна уу"],
    // minLength: [8, "хэтэрхий богино байна , 8 н оронтой байна"],
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
