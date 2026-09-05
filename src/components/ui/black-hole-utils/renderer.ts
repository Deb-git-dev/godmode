// Relativistic Black Hole Accretion Disk Canvas Engine
// Zero Local GPU - Browser Canvas Hardware Accelerated

export interface RendererOptions {
  canvas: HTMLCanvasElement;
}

export interface RendererInstance {
  ready: Promise<void>;
  dispose: () => void;
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
}

interface DiskParticle {
  radius: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
  alpha: number;
  isTopWarp: boolean;
}

export function createRenderer(options: RendererOptions): RendererInstance {
  const { canvas } = options;
  const ctx = canvas.getContext("2d", { alpha: false });

  let animationFrameId: number;
  let isDisposed = false;

  let width = 0;
  let height = 0;
  let centerX = 0;
  let centerY = 0;
  let blackHoleRadius = 60;

  let mouseX = 0;
  let mouseY = 0;
  let targetCenterX = 0;
  let targetCenterY = 0;

  // Starfield
  const stars: Star[] = [];
  const STAR_COUNT = 220;

  // Accretion disk particles
  const particles: DiskParticle[] = [];
  const PARTICLE_COUNT = 380;

  function resize() {
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    width = rect.width || window.innerWidth;
    height = rect.height || window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    ctx.scale(dpr, dpr);

    centerX = width / 2;
    centerY = height / 2;
    targetCenterX = centerX;
    targetCenterY = centerY;

    blackHoleRadius = Math.max(35, Math.min(width, height) * 0.12);

    initStars();
    initParticles();
  }

  function initStars() {
    stars.length = 0;
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: (Math.random() - 0.5) * 0.02
      });
    }
  }

  function initParticles() {
    particles.length = 0;
    const colors = [
      "#67e8f9", // cyan 300
      "#38bdf8", // sky 400
      "#818cf8", // indigo 400
      "#f59e0b", // amber 500
      "#fb923c", // orange 400
      "#f43f5e"  // rose 500
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const distRatio = Math.random();
      // Particles clustered from photon sphere to outer disk
      const r = blackHoleRadius * 1.35 + distRatio * (blackHoleRadius * 2.8);
      // Keplerian angular velocity (faster closer to event horizon)
      const speed = (0.015 + (1 - distRatio) * 0.04) * (Math.random() > 0.05 ? 1 : 1);
      
      particles.push({
        radius: r,
        angle: Math.random() * Math.PI * 2,
        speed,
        size: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        isTopWarp: Math.random() > 0.5
      });
    }
  }

  function onPointerMove(e: MouseEvent | TouchEvent) {
    let clientX = 0;
    let clientY = 0;
    if ("touches" in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ("clientX" in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const rect = canvas.getBoundingClientRect();
    mouseX = clientX - rect.left;
    mouseY = clientY - rect.top;

    // Subtle gravitational pull toward cursor
    const pullFactor = 0.08;
    targetCenterX = (width / 2) + (mouseX - width / 2) * pullFactor;
    targetCenterY = (height / 2) + (mouseY - height / 2) * pullFactor;
  }

  window.addEventListener("resize", resize);
  canvas.addEventListener("mousemove", onPointerMove);
  canvas.addEventListener("touchmove", onPointerMove, { passive: true });

  resize();

  let time = 0;

  function render() {
    if (isDisposed || !ctx) return;

    time += 0.016;

    // Smooth camera/singularity tracking
    centerX += (targetCenterX - centerX) * 0.05;
    centerY += (targetCenterY - centerY) * 0.05;

    // Dark void background
    ctx.fillStyle = "#05070d";
    ctx.fillRect(0, 0, width, height);

    // 1. Draw Starfield with Gravitational Lensing Distortion
    for (const star of stars) {
      star.alpha += star.twinkleSpeed;
      if (star.alpha > 1 || star.alpha < 0.2) star.twinkleSpeed = -star.twinkleSpeed;

      const dx = star.x - centerX;
      const dy = star.y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      // Einstein gravitational deflection of starlight
      let drawX = star.x;
      let drawY = star.y;
      if (dist > blackHoleRadius && dist < blackHoleRadius * 5) {
        const deflection = (blackHoleRadius * blackHoleRadius * 0.4) / dist;
        drawX += (dx / dist) * deflection;
        drawY += (dy / dist) * deflection;
      }

      ctx.beginPath();
      ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(226, 232, 240, ${Math.max(0, Math.min(1, star.alpha))})`;
      ctx.fill();
    }

    // 2. Outer Accretion Glow (Atmosphere / Corona)
    const coronaGrad = ctx.createRadialGradient(
      centerX, centerY, blackHoleRadius * 0.9,
      centerX, centerY, blackHoleRadius * 3.8
    );
    coronaGrad.addColorStop(0, "rgba(99, 102, 241, 0.45)");
    coronaGrad.addColorStop(0.3, "rgba(6, 182, 212, 0.25)");
    coronaGrad.addColorStop(0.7, "rgba(249, 115, 22, 0.08)");
    coronaGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.save();
    ctx.fillStyle = coronaGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, blackHoleRadius * 3.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 3. Gravitational Warped Upper & Lower Accretion Rings (Interstellar Halo)
    const diskTilt = 0.35; // Elliptical projection compression
    
    // Sort particles into back and front for correct depth occlusions
    // Draw back warped halo (seen bent over the top of the black hole)
    ctx.save();
    for (const p of particles) {
      p.angle += p.speed;
      const cosA = Math.cos(p.angle);
      const sinA = Math.sin(p.angle);

      // Relativistic Doppler beaming factor:
      // Approaching side (cosA < 0) is brighter and shifted cyan/blue
      const doppler = 0.7 - cosA * 0.45;

      if (sinA < 0) {
        // Upper warped arc
        const warpY = centerY + sinA * (p.radius * diskTilt) - Math.abs(cosA) * (blackHoleRadius * 0.45);
        const warpX = centerX + cosA * p.radius;

        ctx.beginPath();
        ctx.arc(warpX, warpY, p.size * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha * doppler * 0.6));
        ctx.fill();
      }
    }
    ctx.restore();

    // 4. Primary Accretion Disk (Front Plane)
    ctx.save();
    for (const p of particles) {
      const cosA = Math.cos(p.angle);
      const sinA = Math.sin(p.angle);
      const doppler = 0.75 - cosA * 0.5;

      const px = centerX + cosA * p.radius;
      const py = centerY + sinA * (p.radius * diskTilt);

      // Occlusion check: particles directly behind the event horizon are blocked
      const distFromCenter = Math.sqrt((px - centerX) ** 2 + (py - centerY) ** 2);
      if (sinA < 0 && distFromCenter < blackHoleRadius * 1.05) {
        continue;
      }

      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha * doppler));
      ctx.fill();
    }
    ctx.restore();

    // 5. Photon Sphere Ring (Light Orbit at 1.5 Rs)
    ctx.save();
    const photonGrad = ctx.createRadialGradient(
      centerX, centerY, blackHoleRadius * 0.96,
      centerX, centerY, blackHoleRadius * 1.15
    );
    photonGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
    photonGrad.addColorStop(0.3, "rgba(103, 232, 249, 0.8)");
    photonGrad.addColorStop(0.7, "rgba(99, 102, 241, 0.3)");
    photonGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = photonGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, blackHoleRadius * 1.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 6. Absolute Event Horizon (The Singularity Void)
    ctx.save();
    ctx.fillStyle = "#000000";
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(centerX, centerY, blackHoleRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  return {
    ready: Promise.resolve(),
    dispose: () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onPointerMove);
      canvas.removeEventListener("touchmove", onPointerMove);
    }
  };
}
