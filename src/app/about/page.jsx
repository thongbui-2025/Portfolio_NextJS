"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
const AboutPage = () => {
	const containerRef = useRef();
	const { scrollYProgress } = useScroll({ container: containerRef });

	const skillRef = useRef();
	// const isSkillRefInView = useInView(skillRed, { once: true });
	const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

	const experienceRef = useRef();
	const isExperienceRefInView = useInView(experienceRef, {
		margin: "-100px",
	});

	return (
		<motion.div
			className="h-full "
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			{/* CONTAINER */}
			<div className="h-full overflow-scroll lg:flex" ref={containerRef}>
				{/* TEXT CONTAINER */}
				<div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
					{/* BIOGRAPHY CONTAINER */}
					<div className="flex flex-col gap-12 justify-center">
						{/* BIOGRAPHY TITLE */}
						<h1 className="font-bold text-2xl">BIOGRAPHY</h1>
						{/* BIOGRAPHY DESC */}
						<p className="text-lg leading-7 text-justify">
							Hi, I’m Bui Van Thong – a frontend developer
							passionate about creating smooth, interactive, and
							visually engaging web experiences. I specialize in
							React.js, Next.js, and modern UI frameworks like
							Tailwind CSS and Ant Design. My goal is to craft
							intuitive, high-performance web applications while
							continuously learning and growing in the field of
							web development.
						</p>
						{/* BIOGRAPHY QUOTE */}
						<span className="italic">
							Passionate about frontend, eager to grow.
						</span>
						{/* BIOGRAPHY SIGN SVG */}
						<div className="self-end">
							<svg
								width="185"
								height="77"
								viewBox="0 0 535 201"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M132.409 5.94849C132.66 5.83681 133.324 5.60498 134.239 5.29258L134.586 5.17426C135.373 4.90595 136.248 4.60734 137.004 4.33169C137.439 4.17323 137.851 4.01612 138.195 3.87129C138.494 3.74531 138.877 3.57374 139.156 3.37391C139.233 3.31829 139.36 3.22068 139.483 3.07951C139.58 2.96827 139.848 2.63716 139.877 2.12603C139.913 1.47351 139.551 1.01231 139.231 0.782716C138.968 0.59479 138.708 0.531251 138.596 0.507277C138.348 0.454182 138.097 0.453793 137.925 0.458433C137.726 0.463802 137.497 0.481499 137.243 0.508226C133.227 0.930999 129.231 2.73867 125.46 5.36441C123.234 6.08758 120.947 6.73256 118.656 7.37891L118.656 7.37904C117.638 7.66621 116.619 7.95366 115.604 8.24835C113.873 8.75091 112.129 9.26314 110.375 9.77849C93.9538 14.6024 76.6012 19.7 59.9778 19.7C50.562 19.7 41.8458 19.218 32.7535 17.1593C31.2118 16.8102 29.6156 16.1652 27.8751 15.4619L27.8751 15.4619L27.8745 15.4617C27.6082 15.3541 27.3387 15.2452 27.0654 15.1357C25.0829 14.3418 22.9079 13.5233 20.7493 13.3075C19.925 13.225 19.1899 13.8264 19.1075 14.6508C19.025 15.4751 19.6265 16.2101 20.4508 16.2926C22.134 16.4609 23.9446 17.1176 25.9501 17.9207C26.205 18.0228 26.4636 18.1275 26.7253 18.2335L26.7263 18.2339C28.4433 18.9292 30.2923 19.6779 32.091 20.0852C41.4951 22.2145 50.463 22.7 59.9778 22.7C77.0618 22.7 94.8435 17.4723 111.191 12.6664L111.192 12.666C112.959 12.1465 114.71 11.6319 116.44 11.1294C117.404 10.8498 118.387 10.5726 119.382 10.292L119.383 10.2918L119.593 10.2327C118.132 11.6402 116.731 13.1386 115.405 14.6856C109.187 21.9371 104.303 30.6128 102.363 37.0801C97.9447 51.8085 96.6673 67.1786 95.4057 82.3596L95.4056 82.3597C95.3725 82.7589 95.3393 83.1579 95.3061 83.5567C95.2883 83.7706 95.2705 83.9845 95.2526 84.1983C93.9311 100.035 92.4889 115.642 87.4899 130.454C83.2573 142.995 77.2067 156.468 68.587 167.109C59.9837 177.729 48.8884 185.453 34.5119 186.728C26.9407 187.4 21.5643 186.346 16.9255 183.917C12.2326 181.46 8.16836 177.535 3.30991 172.191C2.75265 171.578 1.80398 171.533 1.19099 172.09C0.578004 172.647 0.53283 173.596 1.09009 174.209C5.96816 179.575 10.3347 183.853 15.534 186.575C20.7876 189.325 26.7651 190.427 34.777 189.716C50.1859 188.349 61.9642 180.05 70.9181 168.997C79.8555 157.964 86.0456 144.114 90.3323 131.413C95.4649 116.205 96.9239 100.246 98.2422 84.4478C98.273 84.0795 98.3036 83.7113 98.3342 83.3433L98.3863 82.7172V82.7171C99.6559 67.4498 100.911 52.3624 105.237 37.9421C107.031 31.9616 111.672 23.6476 117.682 16.6385C120.541 13.3041 123.643 10.3436 126.824 8.07361C128.731 7.44295 130.61 6.74794 132.409 5.94849ZM402.899 36.6246C402.898 36.6527 402.908 36.5583 402.941 36.2084L402.944 36.1822C402.973 35.87 403.014 35.4398 403.055 34.9377C403.138 33.9377 403.229 32.6355 403.254 31.3984C403.279 30.2141 403.25 28.9136 403.028 28.0115C402.969 27.7732 402.882 27.4984 402.742 27.2367C402.61 26.9891 402.361 26.6189 401.911 26.3811C401.393 26.1079 400.842 26.1284 400.394 26.3034C400.002 26.4562 399.711 26.7134 399.511 26.9239C398.438 28.0564 398.015 29.6214 397.771 30.8965C397.663 31.4583 397.579 32.0314 397.504 32.5488L397.465 32.8146C397.376 33.4214 397.294 33.9266 397.189 34.3473C395.701 40.3001 394.34 46.1954 393.172 52.2491C391.052 63.2335 388.291 74.0814 385.517 84.9799L385.51 85.0093C384.813 87.746 384.116 90.4859 383.428 93.232C382.2 98.133 381.002 103.05 379.895 107.992C375.695 120.094 371.269 132.11 366.497 144.02C362.208 154.72 357.229 164.871 352.1 175.246C351.712 176.03 351.316 176.914 350.913 177.813L350.906 177.828C350.785 178.098 350.663 178.369 350.541 178.64C350 179.836 349.433 181.048 348.803 182.197C347.518 184.537 346.088 186.389 344.352 187.291C343.944 187.504 343.696 187.551 343.579 187.557C343.525 187.56 343.501 187.554 343.498 187.553L343.497 187.553C343.495 187.552 343.495 187.552 343.492 187.55C343.449 187.521 343.228 187.294 343.075 186.53C342.785 185.073 343.002 182.984 343.259 181.903C343.326 181.622 343.425 181.243 343.534 180.823L343.534 180.822C343.774 179.898 344.065 178.777 344.18 178.084C344.219 177.85 344.273 177.482 344.239 177.144C344.229 177.046 344.207 176.897 344.15 176.731C344.095 176.574 343.974 176.297 343.701 176.054C343.386 175.775 342.98 175.641 342.576 175.665C342.226 175.686 341.967 175.818 341.831 175.902C341.568 176.062 341.388 176.271 341.299 176.38C341.188 176.515 341.081 176.668 340.98 176.824C340.777 177.139 340.536 177.563 340.252 178.098C339.496 179.526 338.486 181.067 337.272 182.272C336.053 183.481 334.737 184.247 333.353 184.373C332.579 184.443 332.174 184.252 331.918 184.025C331.621 183.759 331.327 183.261 331.137 182.398C330.861 181.143 330.878 179.455 331.112 177.533C331.327 177.394 331.542 177.252 331.756 177.106C334.276 175.388 337.061 173.245 339.444 170.734C341.822 168.229 343.869 165.286 344.8 161.96C345.137 160.758 345.305 159.705 345.287 158.803C345.269 157.903 345.062 157.038 344.53 156.347C343.375 154.85 341.502 155.034 340.243 155.412C338.868 155.826 337.405 156.68 336.149 157.64C334.889 158.602 333.708 159.767 332.952 160.901C332.689 161.296 332.362 162.01 332.031 162.814C331.681 163.666 331.273 164.754 330.853 165.989C330.016 168.454 329.117 171.553 328.542 174.581C328.471 174.956 328.404 175.333 328.343 175.71C314.668 183.588 298.225 176.66 288.986 164.726C287.974 163.419 286.584 162.04 285.218 160.685L285.2 160.668L285.192 160.66C283.791 159.269 282.384 157.874 281.206 156.445C278.769 153.49 277.83 151.035 279.111 148.728C279.317 148.358 279.687 147.548 279.274 146.699C278.84 145.807 277.939 145.654 277.575 145.621C276.755 145.546 275.711 145.809 274.866 146.074C273.944 146.362 272.964 146.752 272.152 147.124C271.745 147.31 271.365 147.499 271.047 147.676C270.762 147.834 270.42 148.039 270.169 148.268C266.405 151.689 262.939 155.214 259.786 159.564C257.461 162.77 255.868 166.2 254.485 169.622C253.967 170.905 253.486 172.164 253.01 173.411L253.009 173.413C252.191 175.557 251.387 177.663 250.432 179.784C250.374 179.914 250.317 180.036 250.263 180.152C250.228 179.817 250.199 179.453 250.176 179.068C250.113 178.009 250.1 176.898 250.1 176V175.912V175.823V175.735V175.647V175.559V175.47V175.382V175.294V175.205V175.117V175.029V174.941V174.852V174.764V174.676V174.587V174.499V174.411V174.323V174.234V174.146V174.058V173.97V173.881V173.793V173.705V173.616V173.528V173.44V173.352V173.263V173.175V173.087V172.998V172.91V172.822V172.734V172.645V172.557V172.469V172.38V172.292V172.204V172.116V172.027V171.939V171.851V171.763V171.674V171.586V171.498V171.409V171.321V171.233V171.145V171.056V170.968V170.88V170.791V170.703V170.615V170.527V170.438V170.35V170.262V170.173V170.085V169.997V169.909V169.82V169.732V169.644V169.555V169.467V169.379V169.291V169.202V169.114V169.026V168.938V168.849V168.761V168.673V168.584V168.496V168.408V168.32V168.231V168.143V168.055V167.966V167.878V167.79V167.702V167.613V167.525V167.437V167.348V167.26V167.172V167.084V166.995V166.907V166.819V166.73V166.642V166.554V166.466V166.377V166.289V166.201V166.113V166.024V165.936V165.848V165.759V165.671V165.583V165.495V165.406V165.318V165.23V165.141V165.053V164.965V164.877V164.788V164.7V164.612V164.523V164.435V164.347V164.259V164.17V164.082V163.994V163.905V163.817V163.729V163.641V163.552V163.464V163.376V163.288V163.199V163.111V163.023V162.934V162.846V162.758V162.67V162.581V162.493V162.405V162.316V162.228V162.14V162.052V161.963V161.875V161.787V161.698V161.61V161.522V161.434V161.345V161.257V161.169V161.08V160.992V160.904V160.816V160.727V160.639V160.551V160.462V160.374V160.286V160.198V160.109V160.021V159.933V159.845V159.756V159.668V159.58V159.491V159.403V159.315V159.227V159.138V159.05V158.962V158.873V158.785V158.697V158.609V158.52V158.432V158.344V158.255V158.167V158.079V157.991V157.902V157.814V157.726V157.638V157.549V157.461V157.373V157.284V157.196V157.108V157.02V156.931V156.857C252.858 149.778 254.721 142.342 256.374 135.089C258.726 124.764 260.553 112.431 260.505 100.192C260.457 87.9682 258.54 75.7248 253.309 65.6635C252.998 65.0656 252.685 64.5531 252.365 64.1376C252.055 63.7345 251.679 63.3459 251.22 63.0872C250.722 62.8074 250.094 62.6687 249.438 62.8774C248.835 63.0692 248.431 63.4855 248.176 63.8401C247.685 64.5224 247.387 65.4804 247.18 66.3975C246.962 67.366 246.801 68.5015 246.681 69.686C246.202 74.4053 246.315 80.454 246.345 81.4663C246.829 97.9285 247.1 114.325 247.1 130.8V130.888V130.977V131.065V131.153V131.241V131.33V131.418V131.506V131.595V131.683V131.771V131.859V131.948V132.036V132.124V132.213V132.301V132.389V132.477V132.566V132.654V132.742V132.83V132.919V133.007V133.095V133.184V133.272V133.36V133.448V133.537V133.625V133.713V133.802V133.89V133.978V134.066V134.155V134.243V134.331V134.42V134.508V134.596V134.684V134.773V134.861V134.949V135.038V135.126V135.214V135.302V135.391V135.479V135.567V135.655V135.744V135.832V135.92V136.009V136.097V136.185V136.273V136.362V136.45V136.538V136.627V136.715V136.803V136.891V136.98V137.068V137.156V137.245V137.333V137.421V137.509V137.598V137.686V137.774V137.863V137.951V138.039V138.127V138.216V138.304V138.392V138.48V138.569V138.657V138.745V138.834V138.922V139.01V139.098V139.187V139.275V139.363V139.452V139.54V139.628V139.716V139.805V139.893V139.981V140.07V140.158V140.246V140.334V140.423V140.511V140.599V140.688V140.776V140.864V140.952V141.041V141.129V141.217V141.305V141.394V141.482V141.57V141.659V141.747V141.835V141.923V142.012V142.1V142.188V142.277V142.365V142.453V142.541V142.63V142.718V142.806V142.895V142.983V143.071V143.159V143.248V143.336V143.424V143.513V143.601V143.689V143.777V143.866V143.954V144.042V144.13V144.219V144.307V144.395V144.484V144.572V144.66V144.748V144.837V144.925V145.013V145.102V145.19V145.278V145.366V145.455V145.543V145.631V145.72V145.808V145.896V145.984V146.073V146.161V146.249V146.338V146.426V146.514V146.602V146.691V146.779V146.867V146.955V147.044V147.132V147.22V147.309V147.397V147.485V147.573V147.662V147.75V147.838V147.927V148.015V148.103V148.191V148.28V148.368V148.456V148.545V148.633V148.721V148.809V148.898V148.986V149.074V149.163V149.251V149.339V149.427V149.516V149.604V149.692V149.78V149.869V149.957V150.045V150.134V150.222V150.31V150.398V150.487V150.575V150.663V150.752V150.84V150.928V151.016V151.105V151.193V151.281V151.37V151.458V151.546V151.634V151.723V151.811V151.899V151.988V152.076V152.164V152.252V152.341V152.429V152.517V152.605V152.694V152.782V152.87V152.959V153.047V153.135V153.223V153.312V153.4V153.488V153.577V153.665V153.753V153.841V153.93V154.018V154.106V154.195V154.283V154.371V154.459V154.548V154.636V154.724V154.812V154.901V154.989V155.077V155.166V155.254V155.342V155.43V155.519V155.607V155.695V155.784V155.872V155.96V156.048V156.137V156.225V156.288C244.465 162.927 241.031 169.136 236.196 174.508C233.989 176.96 230.791 179.024 227.415 179.943C224.053 180.858 220.64 180.615 217.803 178.673C215.192 176.887 213.165 174.661 211.674 172.146C216.988 166.493 222.389 159.734 224.865 152.438C226.172 148.584 226.209 145.371 225.18 142.958C224.128 140.488 222.039 139.063 219.634 138.756C214.914 138.153 209.415 141.777 207.172 148.74C204.76 156.231 204.715 164.651 208.005 171.643C207.313 172.357 206.622 173.057 205.939 173.739C198.598 181.081 191.674 183.789 181.545 186.507C175.474 188.136 169.677 186.237 165.013 182.377C160.33 178.502 156.895 172.722 155.668 166.891C154.776 162.657 154.117 158.325 153.461 153.955C153.276 152.723 153.092 151.756 152.885 151.082C152.786 150.76 152.648 150.387 152.433 150.07C152.243 149.79 151.681 149.126 150.725 149.253C149.956 149.356 149.538 149.929 149.406 150.119C149.217 150.391 149.064 150.711 148.94 151.01C148.685 151.619 148.421 152.447 148.14 153.396C147.407 155.867 146.795 158.249 146.2 160.568L146.2 160.569C144.446 167.394 142.835 173.668 138.718 180.03C136.186 183.944 130.786 187.312 125.302 188.287C119.865 189.254 114.834 187.826 112.342 182.84C105.312 168.78 112.316 153.56 124.957 144.928C130.513 141.133 136.746 140.086 143.575 140.299C144.895 140.341 146.187 140.771 147.67 141.32C147.79 141.365 147.912 141.41 148.036 141.456L148.057 141.464C149.373 141.956 150.878 142.518 152.434 142.691C153.258 142.782 153.999 142.189 154.091 141.366C154.182 140.542 153.589 139.801 152.766 139.709C151.598 139.579 150.441 139.149 149.048 138.631L149.047 138.631L148.712 138.507C147.245 137.964 145.534 137.359 143.669 137.301C136.477 137.076 129.534 138.169 123.265 142.45C109.852 151.61 101.732 168.329 109.658 184.182C112.959 190.783 119.621 192.344 125.827 191.241C131.984 190.147 138.177 186.388 141.237 181.659C145.643 174.851 147.416 167.938 149.198 160.989L149.198 160.988C149.668 159.156 150.138 157.322 150.658 155.486C151.262 159.493 151.896 163.536 152.732 167.509C154.097 173.994 157.887 180.374 163.101 184.688C168.334 189.019 175.108 191.34 182.322 189.404C192.669 186.628 200.18 183.741 208.061 175.861C208.541 175.38 209.028 174.889 209.52 174.387C211.166 176.956 213.343 179.257 216.109 181.149C219.85 183.709 224.226 183.921 228.203 182.838C232.165 181.759 235.854 179.372 238.426 176.515C241.97 172.576 244.791 168.227 247.1 163.634V163.641V163.729V163.817V163.905V163.994V164.082V164.17V164.259V164.347V164.435V164.523V164.612V164.7V164.788V164.877V164.965V165.053V165.141V165.23V165.318V165.406V165.495V165.583V165.671V165.759V165.848V165.936V166.024V166.113V166.201V166.289V166.377V166.466V166.554V166.642V166.73V166.819V166.907V166.995V167.084V167.172V167.26V167.348V167.437V167.525V167.613V167.702V167.79V167.878V167.966V168.055V168.143V168.231V168.32V168.408V168.496V168.584V168.673V168.761V168.849V168.938V169.026V169.114V169.202V169.291V169.379V169.467V169.555V169.644V169.732V169.82V169.909V169.997V170.085V170.173V170.262V170.35V170.438V170.527V170.615V170.703V170.791V170.88V170.968V171.056V171.145V171.233V171.321V171.409V171.498V171.586V171.674V171.763V171.851V171.939V172.027V172.116V172.204V172.292V172.38V172.469V172.557V172.645V172.734V172.822V172.91V172.998V173.087V173.175V173.263V173.352V173.44V173.528V173.616V173.705V173.793V173.881V173.97V174.058V174.146V174.234V174.323V174.411V174.499V174.587V174.676V174.764V174.852V174.941V175.029V175.117V175.205V175.294V175.382V175.47V175.559V175.647V175.735V175.823V175.912V176C247.1 176.918 247.113 178.098 247.181 179.246C247.248 180.364 247.373 181.566 247.634 182.475C247.757 182.902 247.963 183.466 248.36 183.903C248.578 184.142 248.901 184.396 249.345 184.514C249.805 184.636 250.246 184.571 250.612 184.419C251.252 184.152 251.712 183.599 252.04 183.12C252.402 182.59 252.775 181.888 253.168 181.016C254.152 178.83 255.018 176.562 255.863 174.353C256.332 173.124 256.795 171.914 257.267 170.746C258.615 167.409 260.101 164.24 262.214 161.325C265.202 157.204 268.505 153.835 272.187 150.488C272.179 150.495 272.18 150.494 272.193 150.485L272.194 150.485C272.224 150.464 272.317 150.402 272.503 150.298C272.736 150.169 273.043 150.015 273.401 149.851C274.118 149.523 274.98 149.182 275.762 148.937L275.797 148.926C274.8 152.426 276.719 155.72 278.891 158.354C280.165 159.899 281.662 161.383 283.026 162.737L283.088 162.798C284.502 164.2 285.743 165.438 286.614 166.563C295.965 178.641 312.956 186.573 327.953 179.313C327.896 180.657 327.962 181.929 328.207 183.042C328.472 184.246 328.978 185.422 329.922 186.263C330.908 187.143 332.184 187.491 333.625 187.361C335.956 187.149 337.886 185.888 339.385 184.401C339.587 184.2 339.784 183.994 339.974 183.782C339.902 184.872 339.923 186.065 340.133 187.117C340.329 188.097 340.759 189.325 341.814 190.037C343.007 190.842 344.42 190.638 345.736 189.953C348.292 188.624 350.08 186.105 351.433 183.64C352.121 182.386 352.727 181.087 353.274 179.876C353.409 179.578 353.539 179.288 353.666 179.005L353.668 179.001C354.065 178.115 354.429 177.304 354.789 176.576C359.914 166.209 364.944 155.96 369.281 145.136C371.668 139.181 373.967 133.201 376.194 127.199C375.803 129.724 375.454 132.258 375.155 134.803C374.84 137.474 374.471 140.229 374.094 143.039L374.094 143.04C372.5 154.917 370.774 167.778 372.539 179.468C372.724 180.693 372.836 181.969 372.938 183.298C372.959 183.562 372.979 183.829 372.999 184.097C373.079 185.166 373.161 186.268 373.278 187.356C373.569 190.081 374.089 192.912 375.45 195.499C376.596 197.676 378.218 199.038 380.135 199.704C382.009 200.355 384.032 200.296 385.959 199.902C389.784 199.118 393.676 196.911 396.302 195.216C399.776 192.975 407.524 186.858 413.192 180.016C414.964 177.876 416.574 175.618 417.783 173.345C418.713 174.304 419.657 175.221 420.576 176.113L420.581 176.118L420.918 176.445C420.996 176.522 421.075 176.598 421.154 176.675C423.889 179.338 426.745 180.731 429.645 181.069C432.53 181.405 435.3 180.679 437.849 179.391C442.89 176.843 447.364 171.94 450.746 167.741C451.422 166.902 451.866 166.796 452.055 166.79C452.269 166.784 452.674 166.89 453.293 167.498C454.558 168.741 455.881 171.26 457.145 174.436C458.382 177.545 459.476 181.051 460.37 184.066C460.526 184.592 460.678 185.109 460.824 185.609C460.889 185.834 460.954 186.056 461.018 186.274L461.018 186.276C461.598 188.264 462.078 189.911 462.407 190.735C463.871 194.393 465.889 197.563 468.754 198.974C471.809 200.479 475.282 199.755 478.988 196.873C485.903 191.494 492.024 185.163 498.056 178.925L498.056 178.924L498.061 178.92C500.648 176.244 503.218 173.586 505.828 171.027C510.036 166.9 514.361 162.895 518.704 158.872L518.708 158.869L519.741 157.912C524.425 153.572 529.12 149.202 533.661 144.661C534.246 144.075 534.246 143.125 533.661 142.539C533.075 141.954 532.125 141.954 531.539 142.539C527.044 147.035 522.388 151.37 517.702 155.712L516.66 156.676C512.323 160.693 507.968 164.727 503.728 168.885C500.991 171.567 498.352 174.298 495.729 177.012C489.767 183.179 483.888 189.261 477.146 194.505C473.946 196.993 471.716 197.089 470.079 196.283C468.252 195.383 466.589 193.112 465.193 189.621C464.921 188.942 464.51 187.533 463.958 185.638L463.95 185.61C463.736 184.879 463.502 184.075 463.246 183.213C462.347 180.182 461.222 176.569 459.932 173.327C458.669 170.153 457.156 167.089 455.396 165.358C454.501 164.479 453.345 163.75 451.966 163.791C450.561 163.833 449.379 164.656 448.41 165.859C445.048 170.032 440.916 174.479 436.496 176.713C434.315 177.816 432.14 178.339 429.992 178.089C427.86 177.84 425.594 176.811 423.246 174.525L422.841 174.131L422.837 174.127C421.551 172.876 420.286 171.646 419.111 170.385C419.243 170.021 419.361 169.659 419.465 169.297C420.52 165.631 420.166 161.934 417.216 158.984C415.749 157.517 413.768 157.059 412.194 158.064C410.65 159.05 410.187 161.015 410.821 162.919C411.848 165.997 413.609 168.625 415.616 170.978C414.528 173.28 412.869 175.703 410.881 178.102C405.44 184.671 397.937 190.591 394.676 192.695C392.108 194.352 388.607 196.297 385.357 196.963C383.746 197.293 382.311 197.284 381.12 196.87C379.972 196.471 378.923 195.654 378.105 194.101C377.01 192.02 376.539 189.639 376.261 187.036C376.15 186.001 376.072 184.961 375.992 183.897C375.972 183.623 375.951 183.346 375.93 183.068C375.827 181.729 375.708 180.361 375.505 179.021C373.811 167.798 375.459 155.487 377.044 143.636C377.427 140.774 377.806 137.939 378.134 135.153C379.178 126.283 380.835 117.529 382.785 108.813C386.538 97.9936 390.109 87.1129 393.585 76.1881C393.989 74.9194 394.405 73.6279 394.828 72.3173C398.452 61.0785 402.53 48.432 402.899 36.6246ZM396.117 52.8176C394.949 58.8703 393.587 64.8862 392.139 70.8774C395.733 59.7191 399.552 47.7052 399.901 36.5309C399.903 36.4514 399.923 36.2518 399.942 36.0493L399.943 36.0436L399.957 35.8961C399.964 35.8287 399.971 35.7558 399.978 35.6781C399.983 35.6195 399.989 35.5582 399.995 35.4943C398.556 41.2698 397.245 46.9747 396.117 52.8176ZM401.705 28.971C401.705 28.9712 401.703 28.9738 401.698 28.9783C401.703 28.973 401.705 28.9708 401.705 28.971ZM337.269 168.669C335.62 170.406 333.735 171.976 331.865 173.354C332.385 171.083 333.055 168.835 333.694 166.954C334.097 165.768 334.483 164.74 334.806 163.955C335.149 163.121 335.374 162.677 335.448 162.565C335.966 161.789 336.881 160.855 337.969 160.024C339.06 159.191 340.198 158.559 341.107 158.285C341.562 158.148 341.869 158.129 342.042 158.152C342.085 158.157 342.114 158.164 342.132 158.17C342.144 158.174 342.151 158.177 342.154 158.179L342.155 158.18C342.164 158.192 342.277 158.352 342.288 158.862C342.298 159.369 342.202 160.112 341.911 161.151C341.159 163.837 339.456 166.364 337.269 168.669ZM253.449 134.422C252.446 138.824 251.377 143.225 250.1 147.527V147.485V147.397V147.309V147.22V147.132V147.044V146.955V146.867V146.779V146.691V146.602V146.514V146.426V146.338V146.249V146.161V146.073V145.984V145.896V145.808V145.72V145.631V145.543V145.455V145.366V145.278V145.19V145.102V145.013V144.925V144.837V144.748V144.66V144.572V144.484V144.395V144.307V144.219V144.13V144.042V143.954V143.866V143.777V143.689V143.601V143.513V143.424V143.336V143.248V143.159V143.071V142.983V142.895V142.806V142.718V142.63V142.541V142.453V142.365V142.277V142.188V142.1V142.012V141.923V141.835V141.747V141.659V141.57V141.482V141.394V141.305V141.217V141.129V141.041V140.952V140.864V140.776V140.688V140.599V140.511V140.423V140.334V140.246V140.158V140.07V139.981V139.893V139.805V139.716V139.628V139.54V139.452V139.363V139.275V139.187V139.098V139.01V138.922V138.834V138.745V138.657V138.569V138.48V138.392V138.304V138.216V138.127V138.039V137.951V137.863V137.774V137.686V137.598V137.509V137.421V137.333V137.245V137.156V137.068V136.98V136.891V136.803V136.715V136.627V136.538V136.45V136.362V136.273V136.185V136.097V136.009V135.92V135.832V135.744V135.655V135.567V135.479V135.391V135.302V135.214V135.126V135.038V134.949V134.861V134.773V134.684V134.596V134.508V134.42V134.331V134.243V134.155V134.066V133.978V133.89V133.802V133.713V133.625V133.537V133.448V133.36V133.272V133.184V133.095V133.007V132.919V132.83V132.742V132.654V132.566V132.477V132.389V132.301V132.213V132.124V132.036V131.948V131.859V131.771V131.683V131.595V131.506V131.418V131.33V131.241V131.153V131.065V130.977V130.888V130.8C250.1 114.292 249.829 97.8659 249.344 81.3781C249.315 80.3855 249.207 74.5016 249.666 69.9891C249.78 68.8657 249.926 67.862 250.107 67.0575C250.165 66.8009 250.223 66.5809 250.279 66.3943C250.391 66.5751 250.514 66.7912 250.647 67.0476C255.574 76.5233 257.458 88.2344 257.505 100.204C257.551 112.157 255.765 124.256 253.449 134.422ZM250.625 65.5735C250.626 65.5734 250.624 65.5753 250.621 65.579C250.624 65.5754 250.625 65.5736 250.625 65.5735ZM222.024 151.474C219.859 157.854 215.182 163.925 210.248 169.273C207.82 163.319 207.908 156.241 210.028 149.66C211.961 143.656 216.36 141.362 219.255 141.732C220.658 141.911 221.807 142.694 222.421 144.134C223.059 145.633 223.192 148.032 222.024 151.474ZM277.304 148.608C277.331 148.611 277.327 148.613 277.301 148.608L277.304 148.608ZM276.502 147.248C276.51 147.225 276.516 147.212 276.517 147.212C276.518 147.213 276.514 147.224 276.502 147.248ZM343.626 178.273C343.627 178.272 343.624 178.275 343.619 178.282L343.616 178.286C343.622 178.279 343.626 178.274 343.626 178.273ZM415.095 161.105C416.88 162.89 417.345 165.077 416.786 167.658C415.455 165.913 414.363 164.055 413.667 161.97C413.346 161.006 413.718 160.651 413.808 160.593C413.877 160.549 413.992 160.508 414.184 160.544C414.382 160.582 414.706 160.716 415.095 161.105Z"
									fill="black"
								/>
							</svg>
						</div>
						{/* BIOGRAPHY SCROLL SVG */}
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: "10px" }}
							transition={{
								repeat: Infinity,
								duration: 3,
								ease: "easeInOut",
							}}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width={50}
							height={50}
						>
							<path
								d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
								stroke="#000000"
								strokeWidth="1"
							></path>
							<path
								d="M12 6V14"
								stroke="#000000"
								strokeWidth="1"
							></path>
							<path
								d="M15 11L12 14L9 11"
								stroke="#000000"
								strokeWidth="1"
							></path>
						</motion.svg>
					</div>
					{/* SKILLS CONTAINER */}
					<div
						className="flex flex-col gap-12 justify-center"
						ref={skillRef}
					>
						{/* SKILLS TITLE */}
						<motion.h1
							initial={{ x: "-300px" }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							transition={{ duration: 0.2 }}
							className="font-bold text-2xl"
						>
							SKILLS
						</motion.h1>
						{/* SKILLS LIST */}
						<motion.div
							initial={{ x: "-300px" }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							className="flex flex-wrap gap-4"
						>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								JavaScript
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								TypeScript
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								React.js
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								Next.js
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								HTML
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								CSS
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								SCSS
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								TailwindCSS
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								Antd
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								MongoDB
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								SQL Server
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								Node.js
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								Express.js
							</div>
							<div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
								Framer Motion
							</div>
						</motion.div>
						{/* SKILLS SCROLL SVG */}
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: "10px" }}
							transition={{
								repeat: Infinity,
								duration: 3,
								ease: "easeInOut",
							}}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width={50}
							height={50}
						>
							<path
								d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
								stroke="#000000"
								strokeWidth="1"
							></path>
							<path
								d="M12 6V14"
								stroke="#000000"
								strokeWidth="1"
							></path>
							<path
								d="M15 11L12 14L9 11"
								stroke="#000000"
								strokeWidth="1"
							></path>
						</motion.svg>
					</div>
					{/* EXPERIENCE CONTAINER */}
					<div
						className="flex flex-col gap-12 justify-center pb-48"
						ref={experienceRef}
					>
						{/* EXPERIENCE TITLE */}
						<motion.h1
							initial={{ x: "-300px" }}
							animate={isExperienceRefInView ? { x: "0" } : {}}
							transition={{ delay: 0.2 }}
							className="font-bold text-2xl"
						>
							EXPERIENCE
						</motion.h1>
						{/* EXPERIENCE LIST */}
						<motion.div
							initial={{ x: "-300px" }}
							animate={isExperienceRefInView ? { x: "0" } : {}}
						>
							{/* EXPERIENCE LIST ITEM 1 */}
							<div className="flex justify-between h-48">
								{/* LEFT */}
								<div className="w-1/3">
									{/* JOB TITLE */}
									<div className="bg-white p-3 font-semibold rounded-b-lg rounded-tl-lg">
										Frontend Engineer
									</div>
									{/* JOB DESC */}
									<div className="p-3 text-sm italic">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quibusdam, dicta!
									</div>
									{/* JOB DATE */}
									<div className="p-3 text-red-400 text-sm font-semibold">
										2025 - Present
									</div>
									{/* JOB COMPANY */}
									<div className="p-1 rounded bg-white text-sm font-semibold w-fit">
										{/* TechBase */}
									</div>
								</div>
								{/* CENTER */}
								<div className="w-1/6 flex justify-center">
									{/* LINE */}
									<div className="w-1 h-full bg-gray-600 rounded relative">
										{/* CIRCLE */}
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className="w-1/3"></div>
							</div>
							{/* EXPERIENCE LIST ITEM 2 */}
							<div className="flex justify-between h-48">
								{/* LEFT */}
								<div className="w-1/3"></div>
								{/* CENTER */}
								<div className="w-1/6 flex justify-center">
									{/* LINE */}
									<div className="w-1 h-full bg-gray-600 rounded relative">
										{/* CIRCLE */}
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className="w-1/3">
									{/* JOB TITLE */}
									<div className="bg-white p-3 font-semibold rounded-b-lg rounded-tr-lg">
										Frontend Engineer
									</div>
									{/* JOB DESC */}
									<div className="p-3 text-sm italic">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quibusdam, dicta!
									</div>
									{/* JOB DATE */}
									<div className="p-3 text-red-400 text-sm font-semibold">
										2025 - Present
									</div>
									{/* JOB COMPANY */}
									<div className="p-1 rounded bg-white text-sm font-semibold w-fit">
										{/* TechBase */}
									</div>
								</div>
							</div>
							{/* EXPERIENCE LIST ITEM 3 */}
							<div className="flex justify-between h-48">
								{/* LEFT */}
								<div className="w-1/3">
									{/* JOB TITLE */}
									<div className="bg-white p-3 font-semibold rounded-b-lg rounded-tl-lg">
										Frontend Engineer
									</div>
									{/* JOB DESC */}
									<div className="p-3 text-sm italic">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quibusdam, dicta!
									</div>
									{/* JOB DATE */}
									<div className="p-3 text-red-400 text-sm font-semibold">
										2025 - Present
									</div>
									{/* JOB COMPANY */}
									<div className="p-1 rounded bg-white text-sm font-semibold w-fit">
										{/* TechBase */}
									</div>
								</div>
								{/* CENTER */}
								<div className="w-1/6 flex justify-center">
									{/* LINE */}
									<div className="w-1 h-full bg-gray-600 rounded relative">
										{/* CIRCLE */}
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className="w-1/3"></div>
							</div>
						</motion.div>
					</div>
				</div>
				{/* SVG */}
				<div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
					<Brain scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</motion.div>
	);
};
export default AboutPage;
