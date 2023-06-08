import IconLayoutSidebar from '@/icon/IconLayoutSidebar'

type Props = {
    onClick: () => void
    open: boolean
    className: string
}

const ButtonOpenSidebar = ({ open, onClick, className }: Props) => {
    return (
        <div onClick={onClick} className={className}>
            <IconLayoutSidebar height={16} width={16} />
        </div>
    )
}

export default ButtonOpenSidebar
