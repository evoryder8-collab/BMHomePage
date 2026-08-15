"use client";

import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

interface ProductBox3DProps {
  /** Large title painted on the front face. */
  title: string;
  /** Small line under the title. */
  subtitle: string;
  /** Face gradient stops. */
  colors: [string, string];
  /** Accent used for the spine and title underline. */
  accent: string;
  /** Serif front face (B∕A Studio) vs grotesk (Finalova). */
  serif?: boolean;
  className?: string;
}

function makeFaceTexture(
  opts: ProductBox3DProps,
  which: "front" | "spine" | "top",
): THREE.CanvasTexture {
  const w = which === "front" ? 1024 : 256;
  const h = 1024;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;

  const grad = g.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, opts.colors[0]);
  grad.addColorStop(1, opts.colors[1]);
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);

  // soft vignette for depth
  const vg = g.createRadialGradient(w / 2, h / 3, 80, w / 2, h / 2, h);
  vg.addColorStop(0, "rgba(255,255,255,0.10)");
  vg.addColorStop(1, "rgba(0,0,0,0.35)");
  g.fillStyle = vg;
  g.fillRect(0, 0, w, h);

  const sans =
    "-apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', sans-serif";
  const serifStack = "'Bodoni Moda', 'Bodoni 72', Didot, Georgia, serif";
  const family = opts.serif ? serifStack : sans;

  if (which === "front") {
    g.fillStyle = "rgba(255,255,255,0.92)";
    g.textAlign = "left";
    g.font = `600 30px ${sans}`;
    g.fillText("BARBU MEDIA", 84, 120);
    g.fillStyle = opts.accent;
    g.fillRect(84, 140, 56, 4);

    g.fillStyle = "#ffffff";
    g.font = `${opts.serif ? 500 : 700} 110px ${family}`;
    const words = opts.title.split(" ");
    words.forEach((word, i) => {
      g.fillText(word, 80, 480 + i * 122);
    });

    g.fillStyle = "rgba(255,255,255,0.75)";
    g.font = `400 34px ${sans}`;
    g.fillText(opts.subtitle, 84, 560 + (words.length - 1) * 122);

    g.fillStyle = "rgba(255,255,255,0.55)";
    g.font = `600 24px ${sans}`;
    g.fillText("macOS", 84, 920);
  } else if (which === "spine") {
    g.save();
    g.translate(w / 2, h / 2);
    g.rotate(-Math.PI / 2);
    g.fillStyle = "rgba(255,255,255,0.9)";
    g.textAlign = "center";
    g.font = `600 64px ${family}`;
    g.fillText(opts.title, 0, 22);
    g.restore();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function Box(props: ProductBox3DProps & { still?: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const materials = useMemo(() => {
    const front = makeFaceTexture(props, "front");
    const spine = makeFaceTexture(props, "spine");
    const top = makeFaceTexture(props, "top");
    const side = new THREE.MeshStandardMaterial({
      map: spine,
      roughness: 0.35,
      metalness: 0.15,
    });
    const plain = new THREE.MeshStandardMaterial({
      map: top,
      roughness: 0.4,
      metalness: 0.1,
    });
    return [
      side,
      side.clone(),
      plain,
      plain.clone(),
      new THREE.MeshStandardMaterial({
        map: front,
        roughness: 0.28,
        metalness: 0.12,
      }),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(props.colors[1]),
        roughness: 0.5,
      }),
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.title, props.subtitle, props.accent, props.serif]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    const targetY = props.still
      ? -0.5
      : -0.55 + Math.sin(t * 0.35) * 0.16 + pointer.current.x * 0.22;
    const targetX = props.still ? 0.08 : 0.1 + pointer.current.y * 0.1;
    mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.05;
    mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.05;
    mesh.current.position.y = props.still ? 0 : Math.sin(t * 0.8) * 0.045;
  });

  return (
    <mesh ref={mesh} material={materials} castShadow>
      <boxGeometry args={[2.1, 2.7, 0.5]} />
    </mesh>
  );
}

/**
 * The retail-box hero: the app rendered as a physical product floating in
 * 3D space, lit like a studio shot, following the pointer. WebGL via
 * react-three-fiber; renders nothing until mounted (static export safe).
 */
export default function ProductBox3D(props: ProductBox3DProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className={props.className} aria-hidden />;
  }

  return (
    <div className={props.className} aria-hidden>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.6], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 5]} intensity={1.6} />
        <directionalLight
          position={[-6, -2, 3]}
          intensity={0.5}
          color="#dbe4ff"
        />
        <Suspense fallback={null}>
          <Box {...props} still={!!reduce} />
        </Suspense>
      </Canvas>
    </div>
  );
}
