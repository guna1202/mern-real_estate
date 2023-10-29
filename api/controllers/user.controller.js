import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
  res.json({
    message: "Api route is working!",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));

  const userWithSameUsername = await User.findOne({
    username: req.body.username,
  });
  const userWithSameEmail = await User.findOne({ email: req.body.email });

  if (userWithSameUsername && userWithSameUsername._id !== req.params.id) {
    return res.status(400).json({
      success: false,
      message: "Username is not unique",
    });
  }

  if (userWithSameEmail && userWithSameEmail._id !== req.params.id) {
    return res.status(400).json({
      success: false,
      message: "Email is not unique",
    });
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(400, "You can only delete your account"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res
      .clearCookie("access_token")
      .status(200)
      .json("User deleted successfully");
  } catch (error) {
    next(error);
  }
};
