"use client";
import React from "react";

interface NeonGridBackgroundProps {
	className?: string;
}

export const NeonGridBackground: React.FC<NeonGridBackgroundProps> = ({ className = "" }) => {
	return (
		<div className={`absolute inset-0 ${className}`}>
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/50 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
				<div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
				<div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
				<div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
			</div>
		</div>
	);
};

export default NeonGridBackground;




