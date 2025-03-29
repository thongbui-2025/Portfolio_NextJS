"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "-0vh" }}
			transition={{ duration: 1 }}
		>
			<div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
				{/* IMAGE CONTAINER */}
				<div className="h-1/2 relative lg:h-full lg:w-1/2">
					<Image
						src="/avatar_portfolio.png"
						fill
						alt=""
						className="object-contain"
					></Image>
				</div>
				{/* TEXT CONTAINER */}
				<div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 items-center justify-center gap-8">
					{/* TITLE */}
					<motion.h1 className="text-4xl font-bold md:text-6xl self-start">
						<Typewriter
							words={["Hi, I'm Van Thong", "Fullstack"]}
							loop={0}
							cursor
							cursorStyle="|"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={2000}
						/>
						<br />
						Web Developer<span className="ml-1">!</span>
					</motion.h1>
					{/* DESC */}
					<p
						className="md:text-xl text-justify lead"
						style={{ lineHeight: "1.75" }}
					>
						Hi, my name is Bui Van Thong, a final-year IT student at
						Ton Duc Thang University with a passion for frontend
						development. I enjoy building clean, responsive web
						interfaces using React.js and Next.js. I’ve completed
						several personal projects and have a solid foundation in
						Node.js and MongoDB. I’m excited to apply for the React
						Frontend Intern position and grow alongside your team.
					</p>
					<div className="w-full flex gap-4">
						<Link href={"/portfolio"}>
							<button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:opacity-80">
								View My Works
							</button>
						</Link>
						<Link href={"/contact"}>
							<button className="p-4 rounded-lg ring-1 ring-black hover:bg-red-100">
								Contact Me
							</button>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Homepage;
