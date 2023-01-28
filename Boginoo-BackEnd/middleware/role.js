import User from "../model/User";
import Link from "../model/link";

export const AdminRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const link = await Link.findById(id);
    const user = await User.findById(link.user_id);
    if (user.role === "admin") {
      return next();
    } else {
      console.log("admin erh avna uu");
    }
  } catch (error) {
    res.status(401).send({
      success: false,
    });
  }
};
