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
            <SideBar open={openSidebar} onClick={() => setOpenSidebar(false)} />
            <ButtonOpenSidebar
                open={openSidebar}
                onClick={() => setOpenSidebar(true)}
            />
            {children}
        </main>
    )
}

export default LayoutStandardSidebar
