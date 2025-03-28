import Image from "next/image";

const Homepage = () => {
	return (
		<div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
			{/* IMAGE CONTAINER */}
			<div className="h-1/2 relative lg:h-full lg:w-1/2">
				<Image
					src="/hero.png"
					fill
					alt=""
					className="object-contain"
				></Image>
			</div>
			{/* TEXT CONTAINER */}
			<div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 items-center justify-center gap-8">
				{/* TITLE */}
				<h1 className="text-4xl font-bold md:text-6xl">
					Lorem ipsum dolor sit amet consectetur.
				</h1>
				{/* DESC */}
				<p className="md:text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iure nihil delectus eum eos fugiat sequi eveniet ab.
					Suscipit, consequuntur placeat excepturi quia ratione
					cupiditate voluptatum, laboriosam earum pariatur quo itaque.
				</p>
				<div className="w-full flex gap-4">
					<button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
						View My Works
					</button>
					<button className="p-4 rounded-lg ring-1 ring-black">
						Contact Me
					</button>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
