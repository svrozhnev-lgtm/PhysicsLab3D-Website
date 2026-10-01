import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 14)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Lighting
    const ambient = new THREE.AmbientLight(0x8b949e, 0.6)
    scene.add(ambient)
    const dirLight = new THREE.DirectionalLight(0x58a6ff, 1.2)
    dirLight.position.set(5, 8, 5)
    scene.add(dirLight)
    const pointLight = new THREE.PointLight(0x3fb950, 0.8, 20)
    pointLight.position.set(-4, -2, 3)
    scene.add(pointLight)

    // Materials
    const matBlue = new THREE.MeshPhysicalMaterial({
      color: 0x58a6ff, metalness: 0.2, roughness: 0.3, clearcoat: 0.5
    })
    const matGreen = new THREE.MeshPhysicalMaterial({
      color: 0x3fb950, metalness: 0.2, roughness: 0.4
    })
    const matOrange = new THREE.MeshPhysicalMaterial({
      color: 0xff7043, metalness: 0.2, roughness: 0.3
    })
    const matPurple = new THREE.MeshPhysicalMaterial({
      color: 0xbc8cff, metalness: 0.3, roughness: 0.3, clearcoat: 0.6
    })
    const matWire = new THREE.MeshBasicMaterial({
      color: 0x30363d, wireframe: true
    })

    // Objects
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), matBlue)
    sphere.position.set(-3.5, 1.5, 0)
    scene.add(sphere)

    const box = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.4), matOrange)
    box.position.set(3, -1, 1)
    scene.add(box)

    const torus = new THREE.Mesh(new THREE.TorusGeometry(1, 0.35, 16, 48), matPurple)
    torus.position.set(0.5, 2.5, -2)
    scene.add(torus)

    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(0.8, 0), matGreen)
    ico.position.set(-2, -2.5, 1)
    scene.add(ico)

    // Wireframe grid sphere
    const gridSphere = new THREE.Mesh(new THREE.SphereGeometry(4, 16, 16), matWire)
    gridSphere.position.set(1, 0, -5)
    scene.add(gridSphere)

    // Orbit ring
    const ringGeo = new THREE.TorusGeometry(3.5, 0.02, 8, 64)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x58a6ff, transparent: true, opacity: 0.3 })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI * 0.4
    ring.position.set(0, 0, -3)
    scene.add(ring)

    // Small orbiting dot
    const dotGeo = new THREE.SphereGeometry(0.12, 16, 16)
    const dotMat = new THREE.MeshBasicMaterial({ color: 0x58a6ff })
    const dot = new THREE.Mesh(dotGeo, dotMat)
    scene.add(dot)

    // Particles
    const particleCount = 80
    const particlesGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particlesMat = new THREE.PointsMaterial({
      color: 0x58a6ff, size: 0.04, transparent: true, opacity: 0.6
    })
    const particles = new THREE.Points(particlesGeo, particlesMat)
    scene.add(particles)

    // Mouse interaction
    let mouseX = 0, mouseY = 0
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // Animate
    let animId
    const timer = new THREE.Timer()
    const animate = () => {
      animId = requestAnimationFrame(animate)
      timer.update()
      const t = timer.getElapsed()

      sphere.position.y = 1.5 + Math.sin(t * 0.8) * 0.5
      sphere.rotation.y = t * 0.3

      box.rotation.x = t * 0.4
      box.rotation.y = t * 0.6
      box.position.y = -1 + Math.sin(t * 0.6 + 1) * 0.4

      torus.rotation.x = t * 0.5
      torus.rotation.z = t * 0.3
      torus.position.y = 2.5 + Math.sin(t * 0.7 + 2) * 0.3

      ico.rotation.x = t * 0.6
      ico.rotation.z = t * 0.4
      ico.position.y = -2.5 + Math.sin(t * 0.9 + 3) * 0.4

      gridSphere.rotation.y = t * 0.1
      gridSphere.rotation.x = t * 0.05

      // Orbiting dot
      const orbitAngle = t * 0.8
      dot.position.x = Math.cos(orbitAngle) * 3.5
      dot.position.y = Math.sin(orbitAngle) * 3.5 * Math.cos(Math.PI * 0.4)
      dot.position.z = -3 + Math.sin(orbitAngle) * 3.5 * Math.sin(Math.PI * 0.4)

      particles.rotation.y = t * 0.02

      // Camera follows mouse subtly
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.02
      camera.position.y += (-mouseY * 1 - camera.position.y) * 0.02
      camera.lookAt(0, 0, -2)

      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="hero-scene-canvas" />
}
