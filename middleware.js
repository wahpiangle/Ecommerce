import { withAuth } from 'next-auth/middleware'

export default withAuth({
    pages:{
        signIn:'/signup'
    }
})

// redirect these pages to signin page if not authenticated
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)',
        '/dashboard:path*',
]
}