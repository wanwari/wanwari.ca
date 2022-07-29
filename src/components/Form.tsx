const Form = () => {
	return (
		<div className="flex flex-col justify-center text-center w-1/4 rounded-xl border-2 p-8 bg-sky-400 shadow-xl">
			<div>
				<p className="text-white font-bold text-xl mb-8">
					Feel free to use this form to get in touch
				</p>
			</div>
			<div>
				<form className="flex flex-col">
					<input
						type="text"
						className="border rounded p-2 m-2"
						placeholder="Name"
						required
					/>
					<input
						type="text"
						className="border rounded p-2 m-2"
						placeholder="Company"
					/>
					<input
						type="email"
						className="border rounded p-2 m-2"
						placeholder="email@email.ca"
						required
					/>
					<textarea
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
	);
};

export default Form;
