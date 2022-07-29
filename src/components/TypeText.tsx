import { useEffect, useState, useCallback } from "react";

const TypeText = () => {
	const [textBar, setTextBar] = useState(" ");
	const text = "I'm a passionate full-stack developer :)";
	const delay = 750;

	const typeText = useCallback((text: string) => {
		for (let pos = 0; pos <= text.length; pos++) {
			setTimeout(() => {
				setTextBar(text.substring(0, pos));
			}, pos * 65);
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			typeText(text);
		}, delay);
	}, [typeText, text, delay]);

	return <div className="text-3xl h-1">{textBar}</div>;
};

export default TypeText;
