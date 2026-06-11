import { useEffect, useRef, useState, useCallback } from 'react'

// Import all frames using Vite's glob import — eager so they're all bundled
const frameModules = import.meta.glob('../Robot-animation/ezgif-frame-*.jpg', {
  eager: true,
})

// Sort keys to guarantee correct numerical order
const sortedKeys = Object.keys(frameModules).sort((a, b) => {
  const numA = parseInt(a.match(/(\d+)\.jpg$/)?.[1] ?? '0', 10)
  const numB = parseInt(b.match(/(\d+)\.jpg$/)?.[1] ?? '0', 10)
  return numA - numB
})

const FRAMES = sortedKeys.map((key) => frameModules[key].default)
const TOTAL_FRAMES = FRAMES.length

// Store logical canvas size in a ref-friendly way
let canvasLogicalW = 0
let canvasLogicalH = 0

export default function App() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const imagesRef = useRef([])
  const currentFrameRef = useRef(0)
  const targetFrameRef = useRef(0)
  const rafRef = useRef(null)
  const [loadedCount, setLoadedCount] = useState(0)
  const [allLoaded, setAllLoaded] = useState(false)

  // Pre-load all images into Image objects
  useEffect(() => {
    const images = []
    let loaded = 0

    FRAMES.forEach((src, i) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loaded++
        setLoadedCount(loaded)
        if (loaded === TOTAL_FRAMES) {
          setAllLoaded(true)
        }
      }
      img.onerror = () => {
        loaded++
        setLoadedCount(loaded)
        if (loaded === TOTAL_FRAMES) setAllLoaded(true)
      }
      images[i] = img
    })

    imagesRef.current = images
  }, [])

  // Draw a specific frame onto the canvas
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current
    const img = imagesRef.current[index]
    if (!canvas || !img || !img.complete || !img.naturalWidth) return

    const ctx = canvas.getContext('2d')
    const W = canvasLogicalW
    const H = canvasLogicalH

    // Fill white background (matching the frames)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, W, H)

    // Contain-fit: show full image, centered, with padding
    const padding = 0
    const availW = W - padding * 2
    const availH = H - padding * 2

    const imgAspect = img.naturalWidth / img.naturalHeight
    const boxAspect = availW / availH

    let drawW, drawH, drawX, drawY

    if (imgAspect > boxAspect) {
      drawW = availW
      drawH = drawW / imgAspect
      drawX = padding
      drawY = padding + (availH - drawH) / 2
    } else {
      drawH = availH
      drawW = drawH * imgAspect
      drawX = padding + (availW - drawW) / 2
      drawY = padding
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH)
  }, [])

  // Resize canvas to match device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const w = window.innerWidth
    const h = window.innerHeight

    canvasLogicalW = w
    canvasLogicalH = h

    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`

    const ctx = canvas.getContext('2d')
    ctx.resetTransform()
    ctx.scale(dpr, dpr)

    drawFrame(Math.round(currentFrameRef.current))
  }, [drawFrame])

  useEffect(() => {
    if (!allLoaded) return
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [allLoaded, resizeCanvas])

  // Smooth interpolation animation loop (lerp)
  useEffect(() => {
    if (!allLoaded) return

    const SMOOTHING = 0.05

    const animate = () => {
      const current = currentFrameRef.current
      const target = targetFrameRef.current
      const diff = target - current

      if (Math.abs(diff) > 0.05) {
        const next = current + diff * SMOOTHING
        currentFrameRef.current = next
        drawFrame(Math.round(next))
      } else if (Math.round(current) !== target) {
        currentFrameRef.current = target
        drawFrame(target)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [allLoaded, drawFrame])

  // Map scroll position → frame index
  useEffect(() => {
    if (!allLoaded) return

    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const scrollTop = window.scrollY
      const maxScroll = container.scrollHeight - window.innerHeight
      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1)
      targetFrameRef.current = Math.round(progress * (TOTAL_FRAMES - 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [allLoaded])

  const loadPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100)

  return (
    <div ref={containerRef} className="scroll-container">
      {/* Sticky canvas viewport */}
      <div className="sticky-viewport">
        <canvas ref={canvasRef} className="robot-canvas" />

        {/* Loading overlay */}
        {!allLoaded && (
          <div className="loader-overlay">
            <div className="loader-inner">
              <div className="loader-ring">
                <svg viewBox="0 0 100 100" className="loader-svg">
                  <circle
                    cx="50" cy="50" r="44"
                    fill="none"
                    stroke="rgba(0,220,255,0.15)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="50" cy="50" r="44"
                    fill="none"
                    stroke="#00dcff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 44}`}
                    strokeDashoffset={`${2 * Math.PI * 44 * (1 - loadPercent / 100)}`}
                    transform="rotate(-90 50 50)"
                    style={{ transition: 'stroke-dashoffset 0.2s ease' }}
                  />
                </svg>
                <span className="loader-percent">{loadPercent}%</span>
              </div>
              <p className="loader-text">Initializing</p>
            </div>
          </div>
        )}

        {/* Scroll indicator — fades out once user starts scrolling */}
        {allLoaded && (
          <div className="scroll-hint">
            <span className="scroll-hint-text">SCROLL</span>
            <div className="scroll-line">
              <div className="scroll-line-inner" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
