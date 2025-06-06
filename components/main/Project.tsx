"use client";

import React from "react";

const projectData = [
	{
		id: 1,
		title: "🍽️ Explore Cafe",
		description:
			"Modern Restaurant Management Solution - Your all-in-one platform for elevating restaurant experiences with effortless order management, secure Razorpay-powered payments, and personalized user interactions. Features comprehensive menu browsing, real-time order tracking, multiple payment methods, user authentication, order history, profile management, and dedicated feedback system for seamless dining experiences.",
		imageSrc: "/Homepage.png",
		link: "https://github.com/adityachandra512/RestaurantsApp",
		tech: ["MERN Stack", "React", "Node.js"],
	},
	{
		id: 2,
		title: "🎓 Aura LMS",
		description:
			"Innovative Learning Management System - An AI-powered educational platform designed to enhance teaching and learning experiences. Features AI-driven mock interviews, interactive coding modules with multi-language compiler support, custom quiz generation using Gemini 2.0 Flash AI, PDF text extraction, and comprehensive LMS management tools. delivering personalized feedback and seamless user experience across all browsers.",
		imageSrc: "/AuraLMS.png",
		link: "https://github.com/adityachandra512/AuraLMS-Updated-Version",
		tech: ["AI Integration", "Next.js", "Express.js", "Gemini 2.0"],
	},
	{
		id: 3,
		title: "🎵 SongHive",
		description:
			"AI Music Streaming Platform - A comprehensive music streaming application combining robust Flask backend services with MongoDB database management. Features user authentication, personalized playlists, advanced search with genre filtering, liked songs collections, and CRUD operations. Built with RESTful API design ensuring scalable performance, proper error handling, and data validation for seamless music discovery and interaction experience.",
		imageSrc: "/Homepage (1).png",
		link: "https://github.com/adityachandra512/soundHive",
		tech: ["Emotion Detection", "MongoDB", "React.js", "REST API"],
	},
];

function Projects() {
	return (
		<div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 mt-20 w-full z-[20] min-h-screen">
			<div className="h-full w-full flex flex-col gap-8 justify-start max-w-7xl" id="projects">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-4">
						Featured Projects
					</h1>
					<p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
						Explore my latest work and creative solutions
					</p>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
					{projectData.map((project, index) => (
						<div
							key={project.id}
							className="flip-card overflow-visible h-[550px] w-[380px] mx-auto cursor-pointer"
						>
							<div className="card-content w-full h-full [transform-style:preserve-3d] transition-transform duration-600 ease-in-out shadow-[0px_0px_25px_5px_#000000aa] rounded-xl hover:[transform:rotateY(180deg)] group relative z-10">
								
								{/* Front Side - Show Image and Basic Info */}
								<div className="card-front bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] absolute w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] rounded-xl overflow-hidden text-white flex flex-col">
									
									{/* Upper Section - Full Image */}
									<div className="relative w-full h-2/3 overflow-hidden rounded-t-xl">
										<img 
											src={project.imageSrc} 
											alt={project.title}
											className="w-full h-full object-cover pointer-events-none select-none"
										/>
										
										{/* Badge on top of image */}
										<div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500/90 to-cyan-500/90 px-4 py-2 rounded-full backdrop-blur-md border border-white/30 text-sm font-medium pointer-events-none select-none shadow-lg">
											{project.tech[0]}
										</div>

										{/* Floating circles */}
										<div className="circle w-[80px] h-[80px] rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 absolute blur-[15px] animate-floating pointer-events-none"></div>
										<div className="circle bg-gradient-to-r from-pink-500/20 to-purple-500/20 left-[50px] top-0 w-[120px] h-[120px] animate-floating-delayed rounded-full absolute blur-[15px] pointer-events-none"></div>
									</div>

									{/* Lower Section - Project Info */}
									<div className="w-full h-1/3 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 flex flex-col justify-center pointer-events-none select-none">
										<div className="text-center">
											<div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 pointer-events-none select-none">
												#{project.id}
											</div>
											<h3 className="text-lg font-bold text-white mb-3 leading-tight pointer-events-none select-none">
												{project.title}
											</h3>
											<div className="flex flex-wrap gap-2 justify-center">
												{project.tech.map((tech, techIndex) => (
													<span
														key={techIndex}
														className="px-2 py-1 text-xs bg-white/10 text-gray-200 rounded-md border border-white/20 pointer-events-none select-none"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* Back Side - Show Description */}
								<div className="card-back bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] w-full h-full justify-center flex items-center overflow-hidden absolute [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl border border-purple-500/30">
									
									{/* Animated border */}
									<div className="absolute w-[220px] h-[200%] bg-gradient-to-r from-transparent via-purple-500/50 via-pink-500/50 via-cyan-500/50 to-transparent animate-rotation-481 pointer-events-none z-0"></div>
									
									{/* Back Content */}
									<div className="back-content absolute w-[96%] h-[96%] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl text-white flex flex-col p-6 z-30">
										
										{/* Header */}
										<div className="text-center mb-4">
											<h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
												{project.title}
											</h3>
											<div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
										</div>
										
										{/* Description */}
										<div className="flex-1 overflow-y-auto scrollbar-hide">
											<p className="text-sm text-gray-300 text-center leading-relaxed">
												{project.description}
											</p>
										</div>
										
										{/* Button Container */}
										<div className="mt-4 pt-4 border-t border-gray-700/50 flex justify-center relative z-50">
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg no-underline inline-block z-50"
												onClick={(e) => {
													e.stopPropagation();
													window.open(project.link, '_blank', 'noopener,noreferrer');
												}}
											>
												View on GitHub
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Bottom Decoration */}
				<div className="flex justify-center mt-16">
					<div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
				</div>
			</div>

			{/* Updated CSS */}
			<style jsx>{`
				@keyframes rotation_481 {
					0% { transform: rotateZ(0deg); }
					100% { transform: rotateZ(360deg); }
				}
				
				@keyframes floating {
					0% { transform: translateY(0px); }
					50% { transform: translateY(10px); }
					100% { transform: translateY(0px); }
				}
				
				.animate-rotation-481 {
					animation: rotation_481 8000ms linear infinite;
				}
				
				.animate-floating {
					animation: floating 3000ms ease-in-out infinite;
				}
				
				.animate-floating-delayed {
					animation: floating 3200ms ease-in-out infinite;
					animation-delay: -800ms;
				}
				
				.scrollbar-hide {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}

				.flip-card {
					perspective: 1000px;
				}

				.card-content {
					position: relative;
					width: 100%;
					height: 100%;
					transform-style: preserve-3d;
					transition: transform 0.6s ease-in-out;
				}

				.flip-card:hover .card-content {
					transform: rotateY(180deg);
				}

				.card-front, .card-back {
					position: absolute;
					width: 100%;
					height: 100%;
					backface-visibility: hidden;
					-webkit-backface-visibility: hidden;
				}

				.card-back {
					transform: rotateY(180deg);
				}

				.card-back a {
					pointer-events: auto !important;
					z-index: 9999 !important;
					position: relative;
				}
			`}</style>
		</div>
	);
}

export default Projects;