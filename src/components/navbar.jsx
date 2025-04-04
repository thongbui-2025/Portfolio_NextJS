"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
	{ url: "/", title: "Home" },
	{ url: "/about", title: "About" },
	{ url: "/portfolio", title: "Portfolio" },
	{ url: "/contact", title: "Contact" },
];

const iconInfos = [
	{ url: "https://github.com/thongbui-2025", src: "/github.png" },
	{
		url: "https://www.facebook.com/thong.bui.10082917/",
		src: "/facebook.png",
	},
	{
		url: "https://www.linkedin.com/in/v%C4%83n-th%E1%BB%91ng-6559262ba/",
		src: "/linkedin.png",
	},
	{ url: "https://www.instagram.com/thongbui.20_25/", src: "/instagram.png" },
	// { url: "#", src: "/dribbble.png" },
	// { url: "#", src: "/pinterest.png" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: "rgb(255,255,255)",
		},
	};

	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};

	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: "rgb(255,255,255)",
		},
	};

	const listVariants = {
		closed: {
			x: "100vw",
		},
		opened: {
			x: 0,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const listItemVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
			{/* ROUTE PAGE */}
			<div className="hidden md:flex gap-4 w-1/3">
				{links.map((link) => (
					<NavLink key={link.title} link={link} />
				))}
			</div>
			{/* LOGO */}
			<div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
				<Link
					href={"/"}
					className="flex items-center justify-center bg-black text-sm text-white rounded-md font-semibold p-1"
				>
					<span className="mr-1">Jackson</span>
					<span className="flex items-center justify-center w-12 h-8 bg-white text-black rounded">
						.dev
					</span>
				</Link>
			</div>
			{/* SOCIAL */}
			<div className="hidden md:flex gap-4 w-1/3 justify-end">
				{iconInfos.map((iconInfo) => (
					<Link
						href={iconInfo.url}
						key={iconInfo.src}
						// target="_blank"
						// rel="noopener noreferrer"
					>
						<Image
							src={iconInfo.src}
							alt=""
							width={24}
							height={24}
						></Image>
					</Link>
				))}
			</div>
			{/* RESPONSIVE MENU */}
			<div className="md:hidden">
				{/* MENU BUTTON */}
				<button
					className="w-10 h-8 flex flex-col justify-between z-50 relative"
					onClick={() => setOpen((prev) => !prev)}
				>
					<motion.div
						variants={topVariants}
						animate={open ? "opened" : "closed"}
						transition={{ duration: 0.3 }}
						className="w-10 h-1 bg-black rounded origin-left"
					></motion.div>
					<motion.div
						variants={centerVariants}
						animate={open ? "opened" : "closed"}
						transition={{ duration: 0.3 }}
						className="w-10 h-1 bg-black rounded"
					></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={open ? "opened" : "closed"}
						transition={{ duration: 0.3 }}
						className="w-10 h-1 bg-black rounded origin-left"
					></motion.div>
				</button>
				{/* MENU LIST */}
				{open && (
					<motion.div
						variants={listVariants}
						initial="closed"
						animate="opened"
						className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
					>
						{links.map((link) => (
							<motion.div
								variants={listItemVariants}
								key={link.title}
							>
								<Link href={link.url}>{link.title}</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};
export default Navbar;
