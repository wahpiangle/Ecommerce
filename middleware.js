import { withAuth } from 'next-auth/middleware'

export default withAuth({
    pages:{
        signIn:'/signup'
    }
})

// redirect these pages to signin page if not authenticated
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/api/property/:path*',
        '/_next/static/:path*'
    ]
}