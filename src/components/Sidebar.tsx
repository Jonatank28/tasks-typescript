import IconLayoutSidebar from '@/icon/IconLayoutSidebar'
import itensMenuSidebar from '@/data/itensMenuSidebar'

type Props = {
    open: boolean
    onClick: () => void
}

const SideBar = ({ open, onClick }: Props) => {
    console.log('itens data', itensMenuSidebar)

    return (
        <div
            className={`w-[200px] h-screen relative  transition-all duration-300 ${
                open ? 'left-0' : '-left-[200px]'
            }`}
        >
            <div className="w-[200px] h-screen bg-gray-900 fixed">
                <div
                    onClick={onClick}
                    className="absolute top-3 right-3 flex justify-center items-center cursor-pointer rounded-md border border-gray-200/20 p-3 hover:bg-gray-400/10"
                >
                    <IconLayoutSidebar
                        height={16}
                        width={16}
                        className="text-gray-400"
                    />
                </div>
                <div>
                    {itensMenuSidebar.map((item, index) => (
                        <div className="flex items-center gap-2">
                            <p className="text-white">{item.title}</p>
                            <div>{<item.icon height={20} width={20} />}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBar
