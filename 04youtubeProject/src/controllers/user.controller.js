import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //TODO: GET USER DETAILS FROM FRONTEND
  //TODO: VALIDATION
  //TODO: CHECK IF USER ALREADY EXISTS: username,email
  //TODO: CHECK FOR IMAGES AND AVATAR
  //TODO: UPLOAD TO CLOUDINARY
  //TODO: CREATE USER OBJECT - CREATE ENTRY IN DB
  //TODO: REMOVE PASSWORD AND REFRESH TOKEN FROM RESPONSE
  //TODO: CHECK FOR USER CREATION
  //TODO: RETURN RES
  // res.status(200).json({ message: "User Registered" });
  const { username, email, fullName, password } = req.body;
  // console.log("email:", email);
  // if(fullName==""){
  //   throw new ApiError(400, "Full Name is required");
  // }

  //VALIDATION
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  //CHECK IF USER ALREADY EXISTS
  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }
  let coverImageLocalPath;
  if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }
  

  const avatarLocalPath = req.files?.avatar[0]?.path;


  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required.");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);


  if (!avatar) {
    throw new ApiError(400, "Avatar file is required.");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id)
    .select("-password -refreshToken")
    .lean(); // Converts the document to a plain object

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user.");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully."));
});

export { registerUser };
