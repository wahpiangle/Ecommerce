/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    domains: ['dummyimage.com','res.cloudinary.com'],
    remotePatterns:[
        {
            hostname:'dummyimage.com',
            protocol:'https',
            pathname:'/**'
        }
    ]
},
env:{
    GOOGLE_MAPS: process.env.GOOGLE_MAPS,
}
}

module.exports = nextConfig
