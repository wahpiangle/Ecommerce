import { withAuth } from 'next-auth/middleware'

export default withAuth({
    pages:{
        signIn:'/signin'
    }
})

export const config = {
    //redirect to signIn page if user is not authenticated
    matcher: [
        "/:path*",
    ]
}