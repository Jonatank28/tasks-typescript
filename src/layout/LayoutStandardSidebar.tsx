'use client'
import ButtonOpenSidebar from '@/components/ButtonOpenSidebar'
import SideBar from '@/components/Sidebar'
import { useState } from 'react'

type Props = {
    children: React.ReactNode
    openSidebar: boolean
    setOpenSidebar: (open: boolean) => void
}

const LayoutStandardSidebar = ({
    children,
    openSidebar,
    setOpenSidebar,
}: Props) => {
    return (
        <main className="flex">
            <div>
                <SideBar
                    open={openSidebar}
                    onClick={() => setOpenSidebar(false)}
                />
            </div>
            {!openSidebar && (
                <ButtonOpenSidebar
                    open={openSidebar}
                    onClick={() => setOpenSidebar(true)}
                    className="z-50 animate-buttonOpenSidebar absolute top-3 left-3 h-10 w-10 flex justify-center items-center cursor-pointer rounded-md border border-gray-200/20 p-3 hover:bg-gray-400/10"
                />
            )}
            {children}
        </main>
    )
}

export default LayoutStandardSidebar
