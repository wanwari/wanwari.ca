import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
	const [name, setName] = useState("");
	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [messageSent, setMessageSent] = useState(false);

	const form = useRef();

	const service = "service_9xfvp4j";
	const template = "template_civxj5q";
	const public_key = "9oeMWyToRbDSE99O6";

	const sendEmail = (event) => {
		event.preventDefault();
		emailjs.sendForm(service, template, form.current, public_key).then(
			(result) => {
				setMessageSent(true);
			},
			(error) => {
				console.log(error);
			}
		);
	};

	return (
		<div className="flex flex-col justify-center text-center md:rounded-xl md:border-2 md:p-8 md:bg-sky-400 md:shadow-xl">
			{messageSent && (
				<div>
					<p className="text-white font-bold text-xl">
						Thank you for getting in touch, I will respond as soon
						as I can :)
					</p>
				</div>
			)}

			{!messageSent && (
				<div>
					<div>
						<p className="text-white font-bold text-xl mb-8">
							Feel free to use this form to get in touch
						</p>
					</div>
					<div>
						<form
							ref={form}
							onSubmit={(event) => sendEmail(event)}
							className="flex flex-col"
						>
							<input
								type="text"
								name="name"
								value={name}
								onChange={(event) =>
									setName(event.target.value)
								}
								className="border rounded p-2 m-2"
								placeholder="Name"
								required
							/>
							<input
								type="text"
								name="company"
								value={company}
								onChange={(event) =>
									setCompany(event.target.value)
								}
								className="border rounded p-2 m-2"
								placeholder="Company"
							/>
							<input
								type="email"
								name="email"
								value={email}
								onChange={(event) =>
									setEmail(event.target.value)
								}
								className="border rounded p-2 m-2"
								placeholder="email@email.ca"
								required
							/>
							<textarea
								name="message"
								value={message}
								onChange={(event) =>
									setMessage(event.target.value)
								}
								className="border rounded p-2 m-2"
								placeholder="Message..."
								required
							/>
							<input
								type="submit"
								className="p-2 mt-8 font-bold w-full rounded-xl text-sky-500 bg-white hover:cursor-pointer hover:shadow-lg"
								value="Submit"
							/>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Form;
