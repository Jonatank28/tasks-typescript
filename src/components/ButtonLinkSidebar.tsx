import { ItemMenuSidebar } from '@/types/itensMenuSidebar'

type Props = {
    item: ItemMenuSidebar
}

const ButtonLinkSidebar = ({ item }: Props) => {
    return (
        <div
            className="flex items-center gap-2 bg-slate-500/40 rounded-md p-2 cursor-pointer hover:bg-slate-500/60 transition-all"
            key={item.id}
        >
            <p className="text-white">{item.title}</p>
            <div>{<item.icon height={20} width={20} />}</div>
        </div>
    )
}

export default ButtonLinkSidebar
