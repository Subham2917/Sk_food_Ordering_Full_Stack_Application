/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'subham-food-ord.s3.amazonaws.com',
            },
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    }
   
};

export default nextConfig;
