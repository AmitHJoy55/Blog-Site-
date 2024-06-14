import {catchAsyncErrors} from '../middlewares/catchAsyncErrors.js';
import ErrorHandler from '../middlewares/error.js';
import {Blog} from '../models/blogSchema.js';
import cloudinary from 'cloudinary';

export const blogPost = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Blog Main Image Is Mandatory!", 400));
  }
  const { mainImage, paraOneImage} = req.files;
  if (!mainImage) {
    return next(new ErrorHandler("Blog Main Image Is Mandatory!", 400));
  }
  const allowedFormats = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
  if (
    !allowedFormats.includes(mainImage.mimetype) ||
    (paraOneImage && !allowedFormats.includes(paraOneImage.mimetype)) 
  ) {
    return next(
      new ErrorHandler(
        "Invalid file type. Only JPG, PNG and WEBP Formats Are Allowed!",
        400
      )
    );
  }
  const {
    title,
    intro,
    paraOneDescription,
    paraOneTitle,
    category,
    published,
  } = req.body;

  const createdBy = req.user._id;
  const adminName = req.user.name;
  const adminAvatar = req.user.avatar.url;

  if (!title || !category || !intro) {
    return next(
      new ErrorHandler("Title, Intro and Category Are Required Fields!", 400)
    );
  }

  const uploadPromises = [
    cloudinary.uploader.upload(mainImage.tempFilePath),
    paraOneImage
      ? cloudinary.uploader.upload(paraOneImage.tempFilePath)
      : Promise.resolve(null),
  ];

  const [mainImageRes, paraOneImageRes] =
    await Promise.all(uploadPromises);

  if (
    !mainImageRes ||
    mainImageRes.error ||
    (paraOneImage && (!paraOneImageRes || paraOneImageRes.error)) 
  ) {
    return next(
      new ErrorHandler("Error occured while uploading one or more images!", 500)
    );
  }
  const blogData = {
    title,
    intro,
    paraOneDescription,
    paraOneTitle,
    category,
    createdBy,
    adminAvatar,
    adminName,
    published,
    mainImage: {
      public_id: mainImageRes.public_id,
      url: mainImageRes.secure_url,
    },
  };
  if (paraOneImageRes) {
    blogData.paraOneImage = {
      public_id: paraOneImageRes.public_id,
      url: paraOneImageRes.secure_url,
    };
  }
  
  const blog = await Blog.create(blogData);
  res.status(200).json({
    success: true,
    message: "Blog Uploaded!",
    blog,
  });
});

export const deleteBlog = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (!blog) {
    return next(new ErrorHandler("Blog not found!", 404));
  }
  await blog.deleteOne();
  res.status(200).json({
    success: true,
    message: "Blog deleted!",
  });
});

export const getAllBlogs = catchAsyncErrors(async (req, res, next) => {
  const allBlogs = await Blog.find({ published: true });
  res.status(200).json({
    success: true,
    allBlogs,
  });
});


export const getSingleBlog = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (!blog) {
    return next(new ErrorHandler("Blog not found!", 404));
  }
  res.status(200).json({
    success: true,
    blog,
  });
});

export const getMyBlogs = catchAsyncErrors(async (req, res, next) => {
  const createdBy = req.user._id;
  const blogs = await Blog.find({ createdBy });
  res.status(200).json({
    success: true,
    blogs,
  });
});

export const updateBlog = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let blog = await Blog.findById(id);
  if (!blog) {
    return next(new ErrorHandler("Blog not found!", 404));
  }
  const newBlogData = {
    title: req.body.title,
    intro: req.body.intro,
    category: req.body.category,
    paraOneTitle: req.body.paraOneTitle,
    paraOneDescription: req.body.paraOneDescription,
    published: req.body.published,
  };
  if (req.files) {
    const { mainImage, paraOneImage} = req.files;
    const allowedFormats = ["image/png", "image/jpg","image/jpeg", "image/webp"];
    if (
      (mainImage && !allowedFormats.includes(mainImage.mimetype)) ||
      (paraOneImage && !allowedFormats.includes(paraOneImage.mimetype)) 
    ) {
      return next(
        new ErrorHandler(
          "Invalid file format. Only PNG, JPG and Webp formats are allowed.",
          400
        )
      );
    }
    if (req.files && mainImage) {
      const blogMainImageId = blog.mainImage.public_id;
      await cloudinary.uploader.destroy(blogMainImageId);
      const newBlogMainImage = await cloudinary.uploader.upload(
        mainImage.tempFilePath
      );
      newBlogData.mainImage = {
        public_id: newBlogMainImage.public_id,
        url: newBlogMainImage.secure_url,
      };
    }

    if (req.files && paraOneImage) {
      if (blog.paraOneImage && blog.paraOneImage.public_id) {
        const blogParaOneImageId = blog.paraOneImage.public_id;
        await cloudinary.uploader.destroy(blogParaOneImageId);
      }
      const newBlogParaOneImage = await cloudinary.uploader.upload(
        paraOneImage.tempFilePath
      );
      newBlogData.paraOneImage = {
        public_id: newBlogParaOneImage.public_id,
        url: newBlogParaOneImage.secure_url,
      };
    }
    
  }
  blog = await Blog.findByIdAndUpdate(id, newBlogData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Blog Updated!",
    blog,
  });
});
