"use client";
import PaperPlane from "@/Assets/SVGs/PaperPlane";
import "./Form.css";
import CrownIcon from "@/Assets/SVGs/CrownIcon";
import { useState } from "react";
import { motion, useAnimate } from "framer-motion";

export default function EmailForm() {
	const [userInput, setUserInput] = useState();
	const [errorText, setErrorText] = useState();
	const [scope, animate] = useAnimate();
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		<div className="formContainer">
			<div className="formHeader">
				<div className="svgContainer">
					<CrownIcon></CrownIcon>
				</div>
				<h2 className="fontColour">Welcome to XYZ</h2>
				<p className="fontColour">Enter your email and let's get going</p>
			</div>
			<form
				ref={scope}
				className="form"
				onSubmit={(e) => {
					e.preventDefault();
					if (userInput === undefined || userInput === "") {
						animate(scope.current, { x: [0, -5, 5, 0] }, { duration: 0.2 });
						setErrorText("Please enter an email");
					} else {
						const validEmail = userInput.match(emailRegex);

						if (validEmail === null) {
							animate(scope.current, { x: [0, -5, 5, 0] }, { duration: 0.2 });
							setErrorText("Please enter a valid email");
						}
					}
				}}
			>
				<input
					className="emailInput"
					onChange={(input) => {
						setErrorText(undefined);
						setUserInput(input.target.value);
					}}
					placeholder="Enter email..."
				></input>
				<button type="submit" className="submitButton">
					<PaperPlane className="paperPlane"></PaperPlane>
				</button>
			</form>
			<div className="errorContainer">
				{errorText !== undefined ? (
					<p className="errorText">{errorText}</p>
				) : null}
			</div>
		</div>
	);
}
