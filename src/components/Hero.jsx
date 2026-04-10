import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import './Hero.css';

function Scene() {
  return (
    <>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#ff0055" intensity={2} />
      <pointLight position={[10, -10, 10]} color="#00f0ff" intensity={2} />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]} position={[3, 0, -2]}>
          <MeshDistortMaterial
            color="#ff0055"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[1, 64, 64]} position={[-3, 1, -1]}>
          <MeshDistortMaterial
            color="#00f0ff"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>
    </>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hero-text-container"
        >
          <motion.h1 
            className="hero-title"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Star Dance Studio <span className="sparkle">✨</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Where Passion turns into Performance! 💃
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="hero-buttons"
          >
            <a href="#registration" className="btn-primary">
              Join Now
            </a>
            <a href="#batches" className="btn-secondary glass-panel">
              View Batches
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
