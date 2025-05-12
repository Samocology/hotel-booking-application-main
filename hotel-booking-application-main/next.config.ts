const nextConfig = {
  experimental: {
    turbopack: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hotel-booking-app-backend-30q1.onrender.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
