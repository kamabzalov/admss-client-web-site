const nextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'app.admss.com',
            },
        ],
    },
};

export default nextConfig;
