const Form = () => {
	return (
		<div className="flex flex-col justify-center text-center w-1/4 rounded-md">
			<div>
				<p className="text-white font-bold text-xl mb-8">
					Hi, feel free to use this form to get in contact with me
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
						className="p-2 mt-8 font-bold w-full rounded-xl text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 hover:cursor-pointer hover:shadow-lg"
						value="Submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default Form;
