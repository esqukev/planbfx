"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./page.css";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar Three.js y Vanta.js
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    let vantaEffect: any = null;

    const initVanta = async () => {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js");

        // Esperar un poco más para asegurar que Vanta.js está completamente cargado
        setTimeout(() => {
          if (vantaRef.current && window.VANTA && window.VANTA.HALO) {
            try {
              vantaEffect = window.VANTA.HALO({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                baseColor: 0x0,
                backgroundColor: 0x0,
                amplitudeFactor: 0.85,
                size: 0.85
              });
              console.log("Vanta Halo initialized successfully");
            } catch (err) {
              console.error("Error initializing Vanta Halo:", err);
            }
          } else {
            console.error("VANTA.HALO not available or element not found", {
              element: vantaRef.current,
              VANTA: window.VANTA,
              HALO: window.VANTA?.HALO
            });
          }
        }, 500);
      } catch (error) {
        console.error("Error loading Vanta.js:", error);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">
      {/* Efecto Vanta.js Halo como background */}
      <div 
        id="your-element-selector" 
        ref={vantaRef}
        className="vanta-halo-background"
      ></div>
      
      {/* Efecto geométrico con líneas en el medio */}
      <div className="geometric-background"></div>
      
      <main className="relative z-10 flex flex-col items-center justify-center gap-12 px-8 py-16">
        {/* Logo */}
        <div className="logo-container">
          <Image
            src="/logo-variant2.svg"
            alt="Plan B FX Logo"
            width={400}
            height={400}
            priority
            className="logo-image"
          />
        </div>
        
        {/* Texto */}
        <h1 className="deploy-text font-allroundgothic">
          WE WILL BE DEPLOYING SOON
        </h1>
      </main>
    </div>
  );
}
