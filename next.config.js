/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    domains: ['dummyimage.com'],
    remotePatterns:[
        {
            hostname:'dummyimage.com',
            protocol:'https',
            pathname:'/**'
        }
    ]
}
}

module.exports = nextConfig
