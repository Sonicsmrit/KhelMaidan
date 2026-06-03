import { useEffect, useRef } from 'react';

export default function FlowingLines() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let raf;

        function resize() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.fillStyle = '#1c3d34';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        resize();
        window.addEventListener('resize', resize);

        function rand(a, b) { return a + Math.random() * (b - a); }

        let t = 0;

        // Low-frequency flow field = big sweeping ribbon curves
        function flowAngle(x, y, t) {
        const s = 0.0012;
        return (
            Math.sin(x * s + t * 0.38) * Math.cos(y * s * 0.9 - t * 0.22) * Math.PI * 2.5 +
            Math.sin(y * s * 0.7 + x * s * 0.4 + t * 0.18) * Math.PI
        );
        }

        function spawnLine() {
        const { width: W, height: H } = canvas;
        let x, y;
        if (Math.random() < 0.45) {
            const e = Math.floor(Math.random() * 4);
            if      (e === 0) { x = rand(0, W); y = -2; }
            else if (e === 1) { x = W + 2;      y = rand(0, H); }
            else if (e === 2) { x = rand(0, W); y = H + 2; }
            else              { x = -2;         y = rand(0, H); }
        } else {
            x = rand(0, W);
            y = rand(0, H);
        }
        return {
            x, y, px: x, py: y,
            speed:     rand(1.5, 3.0),
            life:      rand(400, 900),
            age:       Math.random() < 0.5 ? Math.floor(rand(0, 400)) : 0,
            opacity:   rand(0.06, 0.18),  // very subtle
            thickness: rand(1, 3),
        };
        }

        const COUNT = 90;
        const lines = Array.from({ length: COUNT }, spawnLine);

        ctx.strokeStyle = 'rgba(160, 210, 195, 1)';

        function draw() {
        const { width: W, height: H } = canvas;
        t += 0.004;

        // very low opacity fill = long persistent trails
        ctx.fillStyle = 'rgba(28, 61, 52, 0.018)';
        ctx.fillRect(0, 0, W, H);

        for (let i = 0; i < lines.length; i++) {
            const l = lines[i];
            l.age++;

            const p    = l.age / l.life;
            const fade = p < 0.06 ? p / 0.06 : p > 0.88 ? (1 - p) / 0.12 : 1;

            const ang = flowAngle(l.x, l.y, t);
            const nx  = l.x + Math.cos(ang) * l.speed;
            const ny  = l.y + Math.sin(ang) * l.speed;

            ctx.beginPath();
            ctx.moveTo(l.px, l.py);
            ctx.lineTo(nx, ny);
            ctx.globalAlpha = l.opacity * fade;
            ctx.lineWidth   = l.thickness;
            ctx.stroke();

            l.px = nx; l.py = ny;
            l.x  = nx; l.y  = ny;

            if (l.age >= l.life || nx < -40 || nx > W+40 || ny < -40 || ny > H+40) {
            lines[i] = spawnLine();
            }
        }

        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(draw);
        }

        draw();
        return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
        ref={canvasRef}
        style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%', height: '100%',
            zIndex: -1,
            background: '#1c3d34',
        }}
        />
    );
}