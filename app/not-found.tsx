'use client'

import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathname = usePathname()

    return (
        <div className="text-center">
            <h2>Cette page n'existe pas</h2>
            <p>c'est dommage mais non, la page {pathname} n'existe pas :/</p>
        </div>
    )
}