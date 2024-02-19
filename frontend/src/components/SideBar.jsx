import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

export default function SideBar() {
	const [isSideMenuOpen, setMenu] = useState(true);
	return (
		<main>
			<nav className="flex justify-between px-8 items-center py-6 lg:px-24 ">
				<div className="flex justify-between gap-8">
					<section className="flex items-center gap-4">
						<FiMenu
							onClick={() => {
								setMenu(true);
							}}
							className="text-3xl lg:hidden cursor-pointer"></FiMenu>
						<Link>
							<h2 className="italic font-bold  text-blue-900 text-3xl">
								MediHub
							</h2>
						</Link>
					</section>
					<div className="flex justify-center gap-8 pt-2">
						<Link className="hidden lg:block text-gray-400 hover:text-black">
							Collection
						</Link>
						<Link className="hidden lg:block text-gray-400 hover:text-black">
							Collection
						</Link>
						<Link className="hidden lg:block text-gray-400 hover:text-black">
							Collection
						</Link>
						<Link className="hidden lg:block text-gray-400 hover:text-black">
							Collection
						</Link>
					</div>
					<div
						className={clsx(
							"fixed h-full transition-all w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 translate-x-full",
							isSideMenuOpen && "translate-x-0"
						)}>
						<section className="text-black w-56 bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex">
							<IoCloseOutline
								onClick={() => {
									setMenu(false);
								}}
								className="mt-0 mb-8 text-3xl cursor-pointer"></IoCloseOutline>
							<Link>Collection</Link>
							<Link>Collection</Link>
							<Link>Collection</Link>
							<Link>Collection</Link>
						</section>
					</div>
				</div>
				<section>
					<img
						className="h-8 w-8 rounded-full"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6L3sOn3ZVY3Uv4TEoDGVtTM4ewYZYwjiu-L0HoTBNYM58ZvDSD80c_6HwD8CTh5baNY&usqp=CAU"
						alt=""
					/>
				</section>
			</nav>
			<hr className="mx-10" />
		</main>
	);
}
