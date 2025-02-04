"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
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
        <h2 className="text-2xl font-semibold">Sign in to your account</h2>

        <SignIn.Root>
          {/* Sign in with Google */}
          <Clerk.Connection
            name="google"
            className="bg-white text-gray-800 rounded-full py-3 px-6 flex items-center justify-center gap-3 font-medium hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </Clerk.Connection>
          <div className="flex items-center gap-4 my-4">
            <div className="h-px bg-gray-600 flex-grow"></div>
            <span className="text-gray-400">or</span>
            <div className="h-px bg-gray-600 flex-grow"></div>
          </div>

          {/* Sign in with credentials */}

          {/* Email */}
          <SignIn.Step name="start">
            <Clerk.Field name="identifier" className="flex flex-col gap-2">
              <Clerk.Input
                placeholder="Email"
                className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              />
              <Clerk.FieldError className="text-red-400 text-sm" />
            </Clerk.Field>
            <SignIn.Action
              submit
              className="mt-4 bg-white text-gray-900 rounded-full py-3 px-6 font-bold hover:bg-gray-200 transition duration-300 ease-in-out w-full"
            >
              Continue
            </SignIn.Action>
          </SignIn.Step>

          {/* Password */}
          <SignIn.Step name="verifications">
            <SignIn.Strategy name="password">
              <Clerk.Field name="password" className="flex flex-col gap-2">
                <Clerk.Input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                />
                <Clerk.FieldError className="text-red-400 text-sm" />
              </Clerk.Field>
              <div className="flex flex-col gap-2 mt-4">
                <SignIn.Action
                  submit
                  className="bg-white text-gray-900 rounded-full py-3 px-6 font-bold hover:bg-gray-200 transition duration-300 ease-in-out"
                >
                  Continue
                </SignIn.Action>
                <SignIn.Action
                  navigate="forgot-password"
                  className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out text-center"
                >
                  Forgot password?
                </SignIn.Action>
              </div>
            </SignIn.Strategy>

            {/* Reset Password Code */}
            <SignIn.Strategy name="reset_password_email_code">
              <p className="text-sm mb-2">
                We sent a code to <SignIn.SafeIdentifier />
              </p>
              <Clerk.Field name="code" className="flex flex-col gap-2">
                <Clerk.Input
                  placeholder="Verification Code"
                  className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                />
                <Clerk.FieldError className="text-red-400 text-sm" />
              </Clerk.Field>
              <SignIn.Action
                submit
                className="mt-4 bg-white text-gray-900 rounded-full py-3 px-6 font-bold hover:bg-gray-200 transition duration-300 ease-in-out w-full"
              >
                Verify
              </SignIn.Action>
            </SignIn.Strategy>
          </SignIn.Step>

          {/* Reset Password */}
          <SignIn.Step
            name="forgot-password"
            className="flex justify-between w-full text-sm"
          >
            <SignIn.SupportedStrategy name="reset_password_email_code">
              <span className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out">
                Reset password
              </span>
            </SignIn.SupportedStrategy>
            <SignIn.Action
              navigate="previous"
              className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
            >
              Go back
            </SignIn.Action>
          </SignIn.Step>

          {/* Update Password  */}

          <SignIn.Step name="reset-password">
            <h2 className="text-2xl font-semibold mb-4">Reset your password</h2>

            <Clerk.Field name="password" className="flex flex-col gap-2 mb-4">
              <Clerk.Label className="text-sm text-gray-300">
                New password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              />
              <Clerk.FieldError className="text-red-400 text-sm" />
            </Clerk.Field>

            <Clerk.Field
              name="confirmPassword"
              className="flex flex-col gap-2 mb-6"
            >
              <Clerk.Label className="text-sm text-gray-300">
                Confirm password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              />
              <Clerk.FieldError className="text-red-400 text-sm" />
            </Clerk.Field>

            <SignIn.Action
              submit
              className="bg-white text-gray-900 rounded-full py-3 px-6 font-bold hover:bg-gray-200 transition duration-300 ease-in-out w-full"
            >
              Reset password
            </SignIn.Action>
          </SignIn.Step>
        </SignIn.Root>
        <p className="text-sm text-center text-gray-400">
          Dont have an account?{" "}
          <Link
            href="/sign-up"
            className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
