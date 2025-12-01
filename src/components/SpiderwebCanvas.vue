<template>
  <canvas ref="canvas" class="fixed inset-0 w-full h-full pointer-events-none"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx = null
let animationId = null
let nodes = []
let mouse = { x: null, y: null }

class Node {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.radius = 2
  }

  update(width, height) {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > width) this.vx *= -1
    if (this.y < 0 || this.y > height) this.vy *= -1
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255, 140, 66, 0.3)'
    ctx.fill()
  }
}

function init() {
  if (!canvas.value) return
  
  ctx = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight

  nodes = []
  const nodeCount = Math.floor((canvas.value.width * canvas.value.height) / 15000)
  
  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new Node(
      Math.random() * canvas.value.width,
      Math.random() * canvas.value.height
    ))
  }
}

function drawConnections() {
  const maxDistance = 150

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.3
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(nodes[j].x, nodes[j].y)
        ctx.strokeStyle = `rgba(255, 140, 66, ${opacity})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    // Connect to mouse
    if (mouse.x !== null) {
      const dx = nodes[i].x - mouse.x
      const dy = nodes[i].y - mouse.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.5
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }
  }
}

function animate() {
  if (!ctx || !canvas.value) return

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  nodes.forEach(node => {
    node.update(canvas.value.width, canvas.value.height)
    node.draw()
  })

  drawConnections()

  animationId = requestAnimationFrame(animate)
}

function handleResize() {
  init()
}

function handleMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function handleMouseLeave() {
  mouse.x = null
  mouse.y = null
}

onMounted(() => {
  init()
  animate()
  
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>
canvas {
  opacity: 0.6;
  z-index: 0;
}
</style>
