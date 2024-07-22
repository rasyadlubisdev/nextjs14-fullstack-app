/** @type {import('next').NextConfig} */
const nextConfig = {
    // Untuk menambahkan external link images di Next Image tag
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            }
        ]
    }
};

export default nextConfig;
