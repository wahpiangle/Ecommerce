import Image from "next/image"

const GoogleSocialButton = ({ icon, onClick }) => {
    return (
        <button type="button" onClick={onClick} className="flex items-center gap-2 border-[1px] border-[#272B30] w-full justify-center px-3 py-2">
            <Image src={icon} width={20} height={20} alt="google"/>
            Sign In with Google
        </button>
    )
}

export default GoogleSocialButton