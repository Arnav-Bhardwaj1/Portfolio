"use client";
import React, { useEffect, useRef } from "react";

interface StarfieldBackgroundProps {
	className?: string;
	density?: number; // stars per 10,000 px^2
	speed?: number; // base rotation speed
}

type Star = {
	x: number;
	y: number;
	radius: number;
	alpha: number;
	twinkleSpeed: number;
	color: string;
};

export const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({
	className = "",
	density = 0.12,
	speed = 0.00025,
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const animationRef = useRef<number | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current!;
		const ctx = canvas.getContext("2d")!;

		let width = (canvas.width = canvas.offsetWidth);
		let height = (canvas.height = canvas.offsetHeight);

		const prefersReducedMotion =
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		// Create stars based on area
		const createStars = (): Star[] => {
			const area = (width * height) / 10000;
			const count = Math.max(60, Math.floor(area * density));
			const stars: Star[] = [];
			for (let i = 0; i < count; i++) {
				const size = Math.random() * 1.6 + 0.2;
				const alpha = Math.random() * 0.8 + 0.2;
				const hueChoices = [200, 210, 180, 160]; // cool premium hues
				const hue = hueChoices[i % hueChoices.length];
				const color = `hsla(${hue}, 100%, ${70 + Math.random() * 10}%, ${alpha})`;
				stars.push({
					x: Math.random() * width,
					y: Math.random() * height,
					radius: size,
					alpha,
					twinkleSpeed: 0.005 + Math.random() * 0.01,
					color,
				});
			}
			return stars;
		};

		let stars = createStars();
		let rotation = 0;
		let lastTime = performance.now();

		const draw = (time: number) => {
			const delta = Math.min(33, time - lastTime);
			lastTime = time;

			// Resize handling
			if (width !== canvas.offsetWidth || height !== canvas.offsetHeight) {
				width = canvas.width = canvas.offsetWidth;
				height = canvas.height = canvas.offsetHeight;
				stars = createStars();
			}

			ctx.clearRect(0, 0, width, height);

			// Slight vignette grid lines under stars for depth
			ctx.save();
			ctx.strokeStyle = "rgba(120,120,160,0.05)";
			ctx.lineWidth = 1;
			const grid = 80;
			for (let x = 0; x < width; x += grid) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, height);
				ctx.stroke();
			}
			for (let y = 0; y < height; y += grid) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(width, y);
				ctx.stroke();
			}
			ctx.restore();

			// Rotate around center
			ctx.save();
			ctx.translate(width / 2, height / 2);
			ctx.rotate(rotation);
			ctx.translate(-width / 2, -height / 2);

			// Draw stars
			for (const s of stars) {
				// twinkle
				s.alpha += s.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
				if (s.alpha < 0.1) s.alpha = 0.1;
				if (s.alpha > 1) s.alpha = 1;

				ctx.beginPath();
				ctx.fillStyle = s.color.replace(/, [0-9.]+\)$/, `, ${s.alpha})`);
				ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
				ctx.fill();
			}

			ctx.restore();

			if (!prefersReducedMotion) {
				rotation += speed * delta;
			}

			animationRef.current = requestAnimationFrame(draw);
		};

		animationRef.current = requestAnimationFrame(draw);

		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, [density, speed]);

	return (
		<div className={`absolute inset-0 pointer-events-none ${className}`}>
			<canvas ref={canvasRef} className="w-full h-full block" />
		</div>
	);
};

export default StarfieldBackground;




