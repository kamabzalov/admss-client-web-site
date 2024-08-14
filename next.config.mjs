const nextConfig = {
    trailingSlash: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'app.admss.com',
            },
        ],
    },
};

export default nextConfig;
