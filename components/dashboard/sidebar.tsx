"use client";

import React, { Fragment, useState } from "react";
import { Nav } from "./nav";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { getApi } from "@/http/api-http";

const Sidebar = ({
	children,
	lng,
}: {
	children: React.ReactNode;
	lng: string;
}) => {
	const router = useRouter();
	const { t } = useTranslation(lng);

	const [isOpen, setIsOpen] = useState(true);
	const [isOpenChangePasswordModel, setisOpenChangePasswordModel] =
		useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const logout = async () => {
		const { status } = await getApi("/logout");
		signOut({
			redirect: false,
		});
		router.push("/auth/login");
	};
	return (
		<div className="relative h-screen  bg-dashboard-content-main-bg text-gray-900">
			<div
				className={`fixed inset-y-0 right-0 w-64   transform transition-transform ease-in-out duration-300 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="absolute bottom-0 right-0 bg-dashboard-active h-0.5 w-full z-10"></div>
				<div className="fixed inset-y-0 right-0 w-64 bg-gradient-to-b from-dashboard-main to-[#3161e6]  ">
					<div className="flex items-center justify-between pt-6">
						<span className="mr-64 hidden"></span>
					</div>
					<div className=" text-white p-4 text-center font-semibold mb-6">
						<p className="text-center">{t("gpf")}</p>
					</div>
					<hr className=" border-white " />
					<Nav />
				</div>
			</div>

			{/* Main content */}
			<div
				className={`mr-${isOpen ? "64" : "0"}  transition-all  duration-300`}
			>
				<div className="sticky w-full z-30 top-0 backdrop-blur-3xl bg-dashboard-content-main-bg/95 flex justify-between items-center">
					<div>
						<button className="text-gray-700 m-4" onClick={toggleSidebar}>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth={0}
								viewBox="0 0 448 512"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
							</svg>
						</button>{" "}
					</div>
					<div className="px-4 relative">
						<Menu as="div" className="relative inline-block text-right">
							<div>
								<Menu.Button className="inline-flex text-[#17436D] w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold  border-0  ring-inset ring-gray-300 hover:bg-gray-50">
									<svg
										stroke="currentColor"
										className="w-6 h-6"
										fill="currentColor"
										strokeWidth={0}
										viewBox="0 0 496 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
									</svg>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute  left-0 z-10 mt-2 w-56 origin-top-right text-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											<div
												onClick={() => {
													setisOpenChangePasswordModel(true);
												}}
												className={"block px-4 py-2 text-sm hover:bg-gray-100"}
											>
												{t("change_password")}
											</div>
										</Menu.Item>

										<Menu.Item>
											<div
												onClick={logout}
												className={
													"block px-4 cursor-pointer  py-2 text-sm hover:bg-gray-100"
												}
											>
												{t("logout")}
											</div>
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
				{/* <ChangePassword
					isOpen={isOpenChangePasswordModel}
					setIsOpen={setisOpenChangePasswordModel}
				/> */}

				{/* Main content goes here */}
				<div
					className={` p-4 bg-dashboard-content-main-bg ${
						isOpen ? "sm:hidden md:block " : ""
					}`}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
