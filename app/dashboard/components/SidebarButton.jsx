import Link from 'next/link'

const SidebarButton = ({ title, link, icon, active, onClick }) => {
    return (
        <Link href={link} className={`flex px-8 py-3 rounded-xl justify-start ${active === title.toLowerCase() ? 'bg-blueText text-primaryText' : 'text-secondaryText hover:opacity-75'}`} onClick={onClick}>
            <div className='flex gap-2 text-lg items-center font-semibold'>
                {icon}
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default SidebarButton