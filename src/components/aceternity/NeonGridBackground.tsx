"use client";
import React from "react";

interface NeonGridBackgroundProps {
	className?: string;
}

export const NeonGridBackground: React.FC<NeonGridBackgroundProps> = ({ className = "" }) => {
	return (
		<div className={`absolute inset-0 ${className}`}>
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
				<div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
			</div>
		</div>
	);
};

export default NeonGridBackground;




