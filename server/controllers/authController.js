import expressAsyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";

//desc    Register a user
//route   POST api/auth/register
//access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new Error("Please fill in all fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      email,
      name,
      password,
    });
    if (user) {
      // Jwt token + cookies
      generateToken(res, user._id);
      res.status(201).json({
        user: {
          ...user._doc,
          password: undefined,
        },
      });
    }
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
});

//desc    Login a user
//route   POST api/auth/login
//access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      await user.save();
      res.status(200).json({
        message: "Login successful",
        user: {
          ...user._doc,
          password: undefined,
        },
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
});

//desc    Logout a user
//route   POST api/auth/logout
//access  Public
export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});

//desc    User forgot password
//route   POST api/auth/forgot-password
//access  Private
export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error("User not found");
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    //const resetTokenExpiresAt =  Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt();

    await user.save();

    // Send Password reset email
    await sendPasswordResetEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password/${resetToken}`
    );

    res.status(200).json({ message: "Password reset link sent to your email" });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//desc    User reset password
//route   POST api/auth/reset-password/:token
//access  Private
export const resetPassword = asyncHandler(async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      res.status(400);
      throw new Error("Invalid or expired password reset token");
    }

    // Update password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();

    await sendResetSuccessEmail(user.email);

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(400);
    throw new Error(err.message);
  }
});

//desc    Check user authentication
//route   GET api/auth/check-auth
//access  Private
export const checkUserAuth = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      res.status(400);
      throw new Error("User not found");
    }
    res.status(200).json({ message: "User authenticated", user });
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
});
