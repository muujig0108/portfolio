import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "icons8.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        port: "",
      },
      //"img.icons8.com", "icons8.com", "w7.pngwing.com"
    ],
  },
};

export default withNextIntl(nextConfig);
