import mongoose from "mongoose";
import { nanoid } from "nanoid";
const LinkSchema = new mongoose.Schema({
  LongUrl: {
    type: String,
    required: [true],
  },
  ShortUrl: {
    type: String,
  },
});
LinkSchema.pre("save", function (next) {
  this.ShortUrl = nanoid(4);
  next();
});
const Link = mongoose.model("Link", LinkSchema);

export default Link;
