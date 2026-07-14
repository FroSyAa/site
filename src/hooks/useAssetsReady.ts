import { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

function areImagesLoaded() {
    return Array.from(document.images).every((img) => img.complete)
}

export function useAssetsReady() {
    const { active: threeAssetsLoading } = useProgress()
    const [windowLoaded, setWindowLoaded] = useState(document.readyState === 'complete')
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const [fontsLoaded, setFontsLoaded] = useState(false)

    useEffect(() => {
        if (windowLoaded) return
        const handleLoad = () => setWindowLoaded(true)
        window.addEventListener('load', handleLoad)
        return () => window.removeEventListener('load', handleLoad)
    }, [windowLoaded])

    useEffect(() => {
        let cancelled = false

        const checkImages = () => {
            if (!cancelled && areImagesLoaded()) setImagesLoaded(true)
        }

        checkImages()
        const interval = window.setInterval(checkImages, 100)

        return () => {
            cancelled = true
            window.clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        let cancelled = false
        document.fonts.ready.then(() => {
            if (!cancelled) setFontsLoaded(true)
        })
        return () => {
            cancelled = true
        }
    }, [])

    return windowLoaded && imagesLoaded && fontsLoaded && !threeAssetsLoading
}
