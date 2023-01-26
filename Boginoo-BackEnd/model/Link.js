import mongoose, { Schema } from "mongoose";
import { nanoid } from "nanoid";

const LinkSchema = new mongoose.Schema({
  LongUrl: {
    type: String,
    required: [true],
  },
  ShortUrl: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
LinkSchema.pre("save", function (next) {
  this.ShortUrl = nanoid(4);
  next();
});
const Link = mongoose.model("Link", LinkSchema);

export default Link;
