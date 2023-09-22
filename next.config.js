/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    images: {
        domains: ['dummyimage.com', 'res.cloudinary.com'],
        remotePatterns: [
            {
                hostname: 'dummyimage.com',
                protocol: 'https',
                pathname: '/**'
            }
        ]
    },
    env: {
        GOOGLE_MAPS: process.env.GOOGLE_MAPS,
    },
    modularizeImports: {
        "@mui/material/?(((\\w*)?/?)*)": {
            transform: "@mui/material/{{ matches.[1] }}/{{member}}",
        },
        "@mui/icons-material/?(((\\w*)?/?)*)": {
            transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
        },
    },
}

module.exports = withBundleAnalyzer(nextConfig)
