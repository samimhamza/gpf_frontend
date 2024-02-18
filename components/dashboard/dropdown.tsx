import React, { useState } from "react";

const Dropdown = ({ title, options }: { title: string; options: any }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionSelect = (option: any) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className="relative">
			<button
				className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg w-full text-left"
				onClick={toggleDropdown}
			>
				{selectedOption || title}
				<svg
					className={`ml-2 h-4 w-4 transform ${
						isOpen ? "rotate-0" : "rotate-180"
					}`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
			{isOpen && (
				<ul className="absolute bg-white border border-gray-300 mt-2 py-1 w-full">
					{options.map((option: any) => (
						<li
							key={option}
							className="cursor-pointer px-4 py-2 hover:bg-gray-100"
							onClick={() => handleOptionSelect(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
