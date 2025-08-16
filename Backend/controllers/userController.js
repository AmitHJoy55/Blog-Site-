import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary";
import crypto from 'crypto';

export const register = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("User Avatar Required!", 400));
  }
  
  const { avatar } = req.files;
  const allowedFormats = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(avatar.mimetype)) {
    return next(
      new ErrorHandler(
        "Invalid file type. Please provide your avatar in png, jpg, jpeg or webp format.",
        400
      )
    );
  }

  const { name, email, password, registrationNo, role } = req.body;
  if (!name || !email || !password || !registrationNo || !role || !avatar) {
    return next(new ErrorHandler("Please fill full details!", 400));
  }

  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists", 400));
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(avatar.tempFilePath);
  
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    return next(new ErrorHandler("Avatar upload failed", 500));
  }

  user = await User.create({
    name,
    email,
    password,
    registrationNo,
    role,
    avatar: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });

  const verificationLink = `http://localhost:4000/api/v1/user/verify?token=${verificationToken}`;

  res.status(200).json({
    success: true,
    message: "User registered successfully. Please click the link below to verify your email.",
    verificationLink,  
  });
});



const jwt = require("jsonwebtoken");  

export const login = catchAsyncErrors(async (req, res, next) => {
  const { registrationNo, password } = req.body;
  
  if (!registrationNo || !password) {
    return next(new ErrorHandler("Please fill full form!", 400));
  }
  
  const user = await User.findOne({ registrationNo }).select("+password");
  
  if (!user) {
    return next(new ErrorHandler("Invalid registrationNo or password!", 400));
  }

  const isPasswordMatched = await user.comparePassword(password);
  
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid registrationNo or password", 400));
  }

  if (!user.isVerified) {
    
    const verificationToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    
    // Store the token in the database
    user.verificationToken = verificationToken;
    await user.save();

    // Send token as a response for alert
    return res.status(200).json({
      message: "Account is not verified. Please verify using the token.",
      verificationToken,
    });
  }

  
  sendToken(user, 200, "User logged in successfully", res);
});


export const verifyAccount = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.query;

  if (!token) {
    return next(new ErrorHandler("Token is required", 400));
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    
    user.isVerified = true;
    user.verificationToken = undefined; 
    await user.save();

    res.status(200).json({ message: "Account successfully verified!" });
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired token", 400));
  }
});


export const logout = catchAsyncErrors((req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "User logged out!",
    });
});

export const getMyProfile = catchAsyncErrors((req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});

export const getAllAdmins = catchAsyncErrors(async (req, res, next) => {
  const admins = await User.find({ role: "Admin" });
  res.status(200).json({
    success: true,
    admins,
  });
});
