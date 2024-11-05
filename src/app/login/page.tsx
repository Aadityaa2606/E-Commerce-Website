import Image from "next/image";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left section with image placeholder */}
      <div className="w-3/5 flex items-center justify-center bg-[#cce4e9] relative mt-[80px] mb-[120px]">
        <Image
          src="/onboarding-image.png"
          alt="Signup image"
          layout="fill" // Makes the image fill the div
          objectFit="contain" // Options: "cover", "contain", "fill" to control how image fits
        />
      </div>

      {/* Right section with form */}
      <div className="w-2/5 flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-4">Log in to Exclusive</h2>
          <p className="text-gray-500 mb-6">Enter your details below</p>

          <form className="space-y-8">
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
            <div className="w-full flex justify-between">
              <button className="p-3 px-12 bg-accent text-white font-semibold rounded-[4px] hover:bg-red-600">
                Log In
              </button>
              <button className="text-accent">Forget Password?</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
