"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
	{
		id: 1,
		color: "from-red-300 to-blue-300",
		title: "E-commerce Mobile Devices",
		desc: "This project is an e-commerce platform for buying and selling mobile devices. It provides a seamless shopping experience with features for both customers and administrators.",
		img: "/project_ecommerce.jpg",
		link: "https://github.com/thongbui-2025/Full_Ecommerce_Phone",
	},
	{
		id: 2,
		color: "from-blue-300 to-violet-300",
		title: "Movie App",
		desc: "This movie streaming platform lets users browse, search, and watch films with an interactive UI, built using advanced React for performance and scalability.",
		img: "/project_movie.jpg",
		link: "https://github.com/thongbui-2025/MovieApp",
	},
	{
		id: 3,
		color: "from-violet-300 to-purple-300",
		title: "My Portfolio",
		desc: "Developed a responsive portfolio using Next.js and Tailwind CSS, implemented smooth animations with Framer Motion, and integrated Email.js to enable contact form functionality.",
		img: "/project_portfolio.jpg",
		link: "https://github.com/thongbui-2025/Portfolio_NextJS",
	},
];

const PortfolioPage = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({ target: ref });
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			<div className="h-[600vh] relative" ref={ref}>
				<div className="w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-8xl text-center">
					My Works
				</div>
				<div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
					<motion.div style={{ x }} className="flex">
						<div className="`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
						{items.map((item) => (
							<div
								className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
								key={item.id}
							>
								<div className="flex flex-col gap-6 items-center text-white">
									<h1 className="text-xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
										{item.title}
									</h1>
									<div className="relative w-60 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[400px]">
										<Image
											src={item.img}
											alt=""
											fill
										></Image>
									</div>
									<p className="w-60 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
										{item.desc}
									</p>
									<Link href={item.link} className="flex">
										<button className="p-2 text-sm md:p-3 md:text-base lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
											See Project
										</button>
									</Link>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
			<div className="h-screen w-screen flex flex-col gap-16 items-center justify-center">
				<h1 className="text-8xl">Do you have a project?</h1>
				<div className="relative">
					<motion.svg
						animate={{ rotate: 360 }}
						transition={{
							duration: 8,
							ease: "linear",
							repeat: Infinity,
						}}
						viewBox="0 0 300 300"
						className="w-64 h-64 md:w-[500px] md:h-[500px] "
					>
						<defs>
							<path
								id="circlePath"
								d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
							/>
						</defs>
						<text fill="#000">
							<textPath
								xlinkHref="#circlePath"
								className="text-xl"
							>
								Front-end Developer and UI Designer
							</textPath>
						</text>
					</motion.svg>
					<Link
						href="/contact"
						className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center bg-black rounded-full text-white"
					>
						Hire Me
					</Link>
				</div>
			</div>
		</motion.div>
	);
};
export default PortfolioPage;
