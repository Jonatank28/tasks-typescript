import IconLayoutSidebar from '@/icon/IconLayoutSidebar'
import itensMenuSidebar from '@/data/itensMenuSidebar'
import ButtonOpenSidebar from './ButtonOpenSidebar'
import { useState } from 'react'
import ButtonLinkSidebar from './ButtonLinkSidebar'

type Props = {
    open: boolean
    onClick: () => void
}

const SideBar = ({ open, onClick }: Props) => {
    return (
        <aside
            className={`w-[200px] h-screen transition-all duration-300 ${
                open ? 'left-0 relative' : '-left-[200px] w-0 absolute'
            }`}
        >
            <section className="w-[200px] h-screen bg-gray-900 fixed flex flex-col p-2">
                <ButtonOpenSidebar
                    onClick={onClick}
                    open={open}
                    className="absolute top-3 right-3 flex justify-center items-center cursor-pointer rounded-md border border-gray-200/20 p-3 hover:bg-gray-400/10"
                />
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div>
                            <h1>Logo</h1>
                        </div>
                        <div className="flex flex-col gap-2 pt-10">
                            {itensMenuSidebar.map((item) => (
                                <ButtonLinkSidebar key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1>Rodape</h1>
                    </div>
                </div>
            </section>
        </aside>
    )
}

export default SideBar
