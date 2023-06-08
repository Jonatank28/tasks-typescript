import IconLayoutSidebar from '@/icon/IconLayoutSidebar'

type Props = {
    onClick: () => void
    open: boolean
}

const ButtonOpenSidebar = ({ open, onClick }: Props) => {
    return (
        <>
            {!open && (
                <div
                    onClick={onClick}
                    className="animate-buttonOpenSidebar absolute top-3 left-3 h-10 w-10 flex justify-center items-center cursor-pointer rounded-md border border-gray-200/20 p-3 hover:bg-gray-400/10"
                >
                    <IconLayoutSidebar height={16} width={16} />
                </div>
            )}
        </>
    )
}

export default ButtonOpenSidebar
