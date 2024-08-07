const nextConfig = {
    trailingSlash: true,
    output: 'export',
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
