import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaceBook, GitHup, Google } from "../assets";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/shopSlice";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

const Data = {
  loginInfo: [
    { id: 1, img: Google },
    { id: 2, img: GitHup },
    { id: 3, img: FaceBook },
  ],
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("! Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "! Password must be at least 6 characters")
    .required("Required"),
});

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showHello, setShowHello] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const userInfo = useSelector((state) => state.shopReducer.userInfo);

  useEffect(() => {
    if (showHello) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000); // 2 ثواني

      return () => clearTimeout(timer);
    }
  }, [showHello, navigate]);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      dispatch(setUserInfo(JSON.parse(storedUserInfo)));
    }
  }, [dispatch]);

  const handlePasswordReset = (email) => {
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetEmailSent(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        setLoading(false);
      });
  };

  if (showHello) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center bg-gray-200 px-5 py-5 shadow-2xl rounded">
          <p className="text-base font-semibold text-indigo-600">Online Shop</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Welcome <span className="text-red-700">{userInfo.userName}</span>
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Your Email is :{" "}
            <span className="text-red-700">{userInfo.email}</span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link to="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="relative my-10">
      <section className="bg-gray-300 h-auto relative flex flex-col md:flex-row items-center bg-opacity-50">
        <div
          style={{
            backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 50%)",
          }}
          className="bg-blue-200 rounded-3xl rounded-tl-none rounded-br-none w-full md:max-w-md lg:max-w-full 
        md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center"
        >
          <div className="w-full my-10">
            <h1 className="text-xl md:text-2xl font-bold leading-tight text-[#004CFF]">
              Welcome Back,
            </h1>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, setFieldError }) => {
                const { email, password } = values;
                setLoading(true); // بدء عرض اللودر

                signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    const user = userCredential.user;
                    const userInfo = {
                      __id: user.uid,
                      userName: user.displayName,
                      email: user.email,
                      image: user.photoURL,
                    };

                    dispatch(setUserInfo(userInfo));

                    // تخزين معلومات المستخدم في localStorage
                    localStorage.setItem("userInfo", JSON.stringify(userInfo));

                    setShowHello(true);
                    setLoading(false);
                    setSubmitting(false);
                  })
                  .catch((error) => {
                    setLoading(false);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error logging in:", errorCode, errorMessage);

                    if (errorCode === "auth/user-not-found") {
                      setFieldError("email", "User not found");
                    } else if (errorCode === "auth/wrong-password") {
                      setFieldError("password", "Incorrect password");
                    } else {
                      setFieldError("email", errorMessage);
                    }

                    setSubmitting(false);
                  });
              }}
            >
              {({ isSubmitting, values }) => (
                <Form className="mt-6">
                  <div>
                    <label className="block text-[#004CFF] font-semibold">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                      autoFocus
                      autoComplete="on"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-[#004CFF] font-semibold">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="text-right mt-2">
                    <button
                      type="button"
                      onClick={() => handlePasswordReset(values.email)}
                      className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full block bg-[#004CFF] hover:bg-indigo-800 
                    focus:bg-indigo-400
   text-white font-semibold rounded-lg px-4 py-3 mt-6"
                    disabled={isSubmitting || loading}
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
                        <span className="ml-3">Logging In...</span>
                      </div>
                    ) : (
                      "Log In"
                    )}
                  </button>

                  {resetEmailSent && (
                    <motion.p
                      className="flex items-center justify-center font-semibold text-green-500 mt-6 p-3 bg-green-200 rounded-lg shadow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Password reset email sent successfully.
                    </motion.p>
                  )}
                </Form>
              )}
            </Formik>

            <div className="  my-3 text-center tracking-wider text-[#004CFF] font-semibold flex flex-col">
              <div className="flex justify-center items-center mt-5">
                <span className="h-[0.5px] w-1/2   bg-gray-400 "> </span>
                <span className="mx-2 text-blue-600 font-medium "> Or </span>
                <span className="h-[0.5px] w-1/2  bg-gray-400"> </span>
              </div>
              <span className="flex mx-auto mt-4 ">
                <svg className="animate-bounce w-6 h-6 bg-gray-600 rounded-full px-1">
                  <ArrowDownwardIcon className="text-white " />
                </svg>
              </span>
            </div>
            <div className="flex justify-center items-center mt-1">
              {Data.loginInfo.map((item) => (
                <div
                  key={item.id}
                  className="w-20 rounded p-6 flex justify-center items-center bg- text-black text-sm font-bold mx-2 px-2 py-3 mt-1 cursor-pointer"
                >
                  <img className="w-10 px-2" src={item.img} alt="" />
                </div>
              ))}
            </div>
            <div className="  mt-4 text-center text-sm font-medium text-gray-700 hover:text-gray-800">
              <span className="mt-8 leading-tight">
                Don't have an account ?
              </span>
              <Link
                className="text-[#004CFF] hover:text-blue-700 font-semibold mx-1"
                to="/reg"
              >
                Register here
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
