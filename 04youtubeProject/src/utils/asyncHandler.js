//Higher order function that takes a function and returns a new function that will call the original function and catch any errors that occur during its execution.
//It will then pass those errors to the next function.
//This is useful for handling errors in async route handlers.
//This is a common pattern in Express.js applications.


// USING PROMISES SYNTAX
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//USING TRY CATCH SYNTAX
// const asyncHandler = (fn) => async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }
