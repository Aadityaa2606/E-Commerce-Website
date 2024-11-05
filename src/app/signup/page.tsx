import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex min-h-screen">
      {/* Left section with image placeholder */}
      <div className="w-3/5 flex items-center justify-center bg-[#cce4e9] relative mt-[80px] mb-[120px]">
        <Image
          src="/onboarding-image.png"
          alt="Signup image"
          layout="fill" // Makes the image fill the div
          objectFit="contain"
        />
      </div>

      {/* Right section with form */}
      <div className="w-2/5 flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-4">Create an account</h2>
          <p className="text-gray-500 mb-6">Enter your details below</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
              Create Account
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100">
            <Image
              src="/Icon-Google.svg"
              alt="Google icon"
              width={20}
              height={20}
            />
            Sign up with Google
          </button>

          <p className="mt-6 text-center text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
