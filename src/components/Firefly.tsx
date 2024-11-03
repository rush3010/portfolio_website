'use client'
import React, { useEffect, useState } from 'react'

export default function Firefly() {
  const [position, setPosition] = useState({ x: Math.random() * 100, y: Math.random() * 100 })
  const [opacity, setOpacity] = useState(Math.random())

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })
      setOpacity(Math.random())
    }, Math.random() * 3000 + 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="absolute w-1 h-1 bg-yellow-300 rounded-full"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        opacity: opacity,
        boxShadow: `0 0 10px 2px rgba(255, 255, 0, ${opacity})`,
        transition: 'all 2s ease-in-out',
      }}
    ></div>
  )
}