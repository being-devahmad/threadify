"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  return (
    <div className="h-screen flex items-center justify-between p-8 bg-gray-900 text-white">
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="320"
          height="320"
          viewBox="0 0 24 24"
          className="text-white fill-current"
        >
          <path d="M 26.609375 29.023438 L 3.425781 29.023438 L 3.425781 26.707031 L 24.3125 26.707031 L 24.3125 23.242188 L 3.390625 23.242188 L 3.441406 0.015625 L 11.46875 0.015625 L 11.46875 17.117188 L 9.167969 17.117188 L 9.167969 2.335938 L 5.738281 2.335938 L 5.695312 20.925781 L 26.609375 20.925781 L 26.609375 29.023438" />
        </svg>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6 max-w-md mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Happening now
        </h1>
        <h2 className="text-2xl font-semibold">Join today.</h2>
        <SignUp.Root>
          {/* SignUp with Google */}
          <Clerk.Connection
            name="google"
            className="bg-white text-gray-800 rounded-full py-3 px-6 flex items-center justify-center gap-3 font-medium hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <FcGoogle className="text-2xl" />
            Sign up with Google
          </Clerk.Connection>
          <div className="flex items-center gap-4 my-4">
            <div className="h-px bg-gray-600 flex-grow"></div>
            <span className="text-gray-400">or</span>
            <div className="h-px bg-gray-600 flex-grow"></div>
          </div>

          {/* Sign up with credentials */}
          <SignUp.Step name="start">
            {/* username */}
            <Clerk.Field name={"username"} className="flex flex-col gap-2 mb-4">
              <Clerk.Input
                placeholder="Username"
                className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              />
              <Clerk.FieldError className="text-red-400 text-sm" />
            </Clerk.Field>

            {/* email address */}
            <Clerk.Field
              name={"emailAddress"}
              className="flex flex-col gap-2 mb-4"
            >
              <Clerk.Input
                placeholder="Email"
                className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              />
              <Clerk.FieldError className="text-red-400 text-sm" />
            </Clerk.Field>

            {/* Password */}
            <Clerk.Field name="password" className="flex flex-col gap-2 mb-4">
              <Clerk.Input
                type="password"
                placeholder="Password"
                className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              />
              <Clerk.FieldError className="text-red-400 text-sm" />
            </Clerk.Field>

            {/* <SignUp.Captcha /> */}

            <SignUp.Action
              submit
              className="mt-4 bg-white text-gray-900 rounded-full py-3 px-6 font-bold 
              hover:bg-gray-200 transition duration-300 ease-in-out w-full"
            >
              Sign up
            </SignUp.Action>
          </SignUp.Step>

          {/* Missing Field - Username */}
          <SignUp.Step name="continue">
            <Clerk.Field name={"username"} className="flex flex-col gap-2 mb-4">
              <Clerk.Input
                placeholder="Username"
                className="bg-transparent border border-gray-600 rounded-full py-3 px-6 
              text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              />
              <Clerk.FieldError className="text-red-400 text-sm" />
            </Clerk.Field>

            <SignUp.Action
              submit
              className="mt-4 bg-white text-gray-900 rounded-full py-3 px-6 font-bold 
              hover:bg-gray-200 transition duration-300 ease-in-out w-full"
            >
              Sign up
            </SignUp.Action>
          </SignUp.Step>

          {/* verification code for email */}
          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <p className="text-sm mb-2">
                Check your email for verification code
              </p>
              <Clerk.Field name="code" className="flex flex-col gap-2">
                <Clerk.Input
                  placeholder="Verification Code"
                  className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                />
                <Clerk.FieldError className="text-red-400 text-sm" />
              </Clerk.Field>
              <SignUp.Action
                submit
                className="mt-4 bg-white text-gray-900 rounded-full py-3 px-6 font-bold hover:bg-gray-200 transition duration-300 ease-in-out w-full"
              >
                Verify
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>

          <p className="mt-4 text-xs text-gray-400">
            By signing up, you agree to the{" "}
            <span className="text-blue-400">Terms of Service</span> and{" "}
            <span className="text-blue-400">Privacy Policy</span>, including{" "}
            <span className="text-blue-400">Cookie Use</span>.
          </p>
        </SignUp.Root>
        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
