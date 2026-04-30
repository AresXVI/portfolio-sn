'use client'

import { useEffect, useState } from "react"

interface UseActiveSectionOptions {
    rootMargin?: string
    threshold?: number | number[]
    selector?: string
}

export function useActiveSection({
    rootMargin = "-60% 0px -50% 0px",
    threshold = [0, 0.1, 0.25, 0.5, 0.75, 1],
    selector = "[id]",
}: UseActiveSectionOptions = {}) {
    const [activeSection, setActiveSection] = useState<string>("")

    useEffect(() => {
        const sections = document.querySelectorAll(selector)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)

                        window.history.replaceState({}, "", `#${entry.target.id}`)
                    }
                })
            },
            { rootMargin, threshold }
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
        }, [rootMargin, threshold, selector])

    return activeSection
}