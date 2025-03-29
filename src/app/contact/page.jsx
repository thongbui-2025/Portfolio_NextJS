"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
const ContactPage = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const text = "Say Hello";

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setSuccess(false);
		setError(false);

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					console.log("SUCCESS!");
					setSuccess(true);
					form.current.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
					setError(true);
				}
			);
	};

	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "-0vh" }}
			transition={{ duration: 1 }}
		>
			<div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
				{/* TEXT CONTAINER */}
				<div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
					<div>
						{text.split("").map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 3,
									delay: index * 0.1,
									repeat: Infinity,
								}}
							>
								{letter}
							</motion.span>
						))}
						😊
					</div>
				</div>
				{/* FORM CONTAINER */}
				<form
					ref={form}
					onSubmit={sendEmail}
					className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
				>
					<span>Dear Jackson Dev,</span>
					<textarea
						rows={6}
						name="user_message"
						className="bg-transparent border-b-2 border-b-black outline-none resize-none"
					></textarea>
					<span>My mail address is:</span>
					<input
						type="text"
						name="user_email"
						className="bg-transparent border-b-2 border-b-black outline-none"
					/>
					<span>Regards</span>
					<button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
						Send
					</button>
					{success && (
						<span className="text-green-600 font-semibold">
							Your message has been sent successfully!
						</span>
					)}
					{error && (
						<span className="text-red-600 font-semibold">
							Something went wrong!
						</span>
					)}
				</form>
			</div>
		</motion.div>
	);
};
export default ContactPage;
