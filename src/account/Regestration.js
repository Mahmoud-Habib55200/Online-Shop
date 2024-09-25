import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucssMsg, setSucssMsg] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "! Must be 15 characters or less")
        .required("! Required"),
      email: Yup.string()
        .email("! Invalid email address")
        .required("! Required"),
      password: Yup.string()
        .min(6, "! Must be at least 6 characters")
        .required("! Required"),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "! Passwords must match")
        .required("! Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const { name, email, password } = values;
      setLoading(true);
      setFirebaseError(""); // Clear error message before starting registration
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              console.log("Profile updated successfully");
              setSucssMsg("Account Created Successfully!");
              setTimeout(() => {
                navigate("/sign");
              }, 2000);
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
              setLoading(false);
            });
          const user = userCredential.user;
          console.log("User registered:", user);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseError("Email Already In Use, try another one");
            resetForm(); // Clear input fields
          }
        });
    },
  });

  const handleFocus = () => {
    setFirebaseError(""); // Clear error message when user focuses on any input field
  };
  return (
    <div className="relative my-10">
      <section
        className=" bg-gray-300 h-auto relative flex flex-col md:flex-row
       items-center bg-opacity-50"
      >
        <div
          style={{
            backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 60%)",
          }}
          className="rounded-3xl rounded-l-none w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center"
        >
          <div className="w-full my-10">
            <h1 className="text-xl md:text-2xl font-bold leading-tight text-[#004CFF]">
              Welcome, Create Account
            </h1>
            <form className="mt-6" onSubmit={formik.handleSubmit}>
              <div className="relative">
                <label className="block text-[#004CFF]">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className={`w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border
                     ${
                       formik.touched.name && formik.errors.name
                         ? "border-red-500"
                         : "focus:border-blue-500"
                     }
                          focus:bg-white focus:outline-none`}
                  autoFocus
                  autoComplete="on"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={handleFocus}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="flex items-center">
                    <ErrorIcon className="text-red-500 absolute right-3 top-9" />
                    <div className="text-red-500 text-sm font-semibold italic">
                      {formik.errors.name}

                    </div>
                  </div>
                ) : (
                  formik.touched.name &&
                  !formik.errors.name && (
                    <CheckIcon className="text-green-500 absolute right-3 top-9" />
                  )
                )}
              </div>
              <div className="relative my-3">
                <label className="block text-[#004CFF]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className={`w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "focus:border-blue-500"
                  } focus:bg-white focus:outline-none`}
                  autoComplete="on"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={handleFocus}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="flex items-center">
                    <ErrorIcon className="text-red-500 absolute right-3 top-9" />
                    <div className="text-red-500 text-sm font-semibold italic">
                      {formik.errors.email}
                    </div>
                  </div>
                ) : (
                  formik.touched.email &&
                  !formik.errors.email && (
                    <CheckIcon className="text-green-500 absolute right-3 top-9" />
                  )
                )}
              </div>
              <div className="relative my-3">
                <label className="block text-[#004CFF]">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className={`w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "focus:border-blue-500"
                  } focus:bg-white focus:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={handleFocus}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="flex items-center">
                    <ErrorIcon className="text-red-500 absolute right-3 top-9" />
                    <div className="text-red-500 text-sm font-semibold italic">
                      {formik.errors.password}
                    </div>
                  </div>
                ) : (
                  formik.touched.password &&
                  !formik.errors.password && (
                    <CheckIcon className="text-green-500 absolute right-3 top-9" />
                  )
                )}
              </div>
              <div className="relative mt-4">
                <label className="block text-[#004CFF] font-semibold">
                  Re-Password
                </label>
                <input
                  type="password"
                  name="rePassword"
                  placeholder="Enter Password"
                  className={`w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border ${
                    formik.touched.rePassword && formik.errors.rePassword
                      ? "border-red-500"
                      : "focus:border-blue-500"
                  } focus:bg-white focus:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={handleFocus}
                  value={formik.values.rePassword}
                />
                {formik.touched.rePassword && formik.errors.rePassword ? (
                  <div className="flex items-center">
                    <ErrorIcon className="text-red-500 absolute right-3 top-9" />
                    <div className="text-red-500 text-sm font-semibold italic">
                      {formik.errors.rePassword}
                    </div>
                  </div>
                ) : (
                  formik.touched.rePassword &&
                  !formik.errors.rePassword && (
                    <CheckIcon className="text-green-500 absolute right-3 top-9" />
                  )
                )}
              </div>

              <div className="relative mt-4">
                <label className="block text-[#004CFF] font-semibold">
                  Gender
                </label>
                <select
                  name="gender"
                  className={`w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border ${
                    formik.touched.gender && formik.errors.gender
                      ? "border-red-500"
                      : "focus:border-blue-500"
                  } focus:bg-white focus:outline-none`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="flex items-center">
                    <ErrorIcon className="text-red-500 absolute right-3 top-9" />
                    <div className="text-red-500 text-sm font-semibold italic">
                      {formik.errors.gender}
                    </div>
                  </div>
                ) : (
                  formik.touched.gender &&
                  !formik.errors.gender && (
                    <CheckIcon className="text-green-500 absolute right-3 top-9" />
                  )
                )}
              </div>

              <button
                type="submit"
                className={`w-full block bg-[#004CFF] hover:bg-indigo-800 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 ${
                  !formik.isValid || !formik.dirty
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={!formik.isValid || !formik.dirty || loading}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="25"
                      visible={true}
                    />
                    <span className="ml-3">Processing...</span>
                  </div>
                ) : (
                  "Register Account"
                )}
              </button>
              {sucssMsg && (
                <motion.p
                  className="flex items-center justify-center font-semibold text-green-500 mt-6 p-3 bg-green-200 rounded-lg shadow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {sucssMsg}
                </motion.p>
              )}
              {firebaseError && (
                <motion.p
                  className="flex items-center justify-center font-semibold text-red-500 mt-6 p-3 bg-red-200 rounded-lg shadow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {firebaseError}
                </motion.p>
              )}
            </form>
            <hr className="my-6 border-gray-300 w-full" />
            <p className="mt-8">
              Already have an account?{" "}
              <Link
                to="/sign"
                className="text-[#004CFF] hover:text-blue-700 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
