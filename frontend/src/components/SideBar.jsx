import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

export default function SideBar() {
	const [isSideMenuOpen, setMenu] = useState(false);
	return (
		<main className="bg-blue-100 ">
			<nav className="flex items-center justify-between px-8 py-6 lg:px-16">
				<div className="flex justify-between gap-8">
					<section className="flex items-center gap-4">
						<FiMenu
							onClick={() => {
								setMenu(true);
								console.log(isSideMenuOpen);
							}}
							className="text-3xl cursor-pointer lg:hidden"></FiMenu>
						<Link>
							<h2 className="text-3xl italic font-bold text-blue-900">
								MediHub
							</h2>
						</Link>
					</section>
					<div className="flex gap-8 pt-2 ">
						<Link className="hidden text-gray-400 lg:block hover:text-black">
							Collection
						</Link>
						<Link className="hidden text-gray-400 lg:block hover:text-black">
							Collection
						</Link>
						<Link className="hidden text-gray-400 lg:block hover:text-black">
							Collection
						</Link>
						<Link className="hidden text-gray-400 lg:block hover:text-black">
							Collection
						</Link>
					</div>
					<div
						className={clsx(
							" fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
							isSideMenuOpen && "translate-x-0"
						)}>
						<section className="absolute top-0 left-0 z-50 flex flex-col w-56 h-screen gap-8 p-8 text-black bg-gray-100">
							<IoCloseOutline
								onClick={() => {
									setMenu(false);
									console.log(isSideMenuOpen);
								}}
								className="mt-0 mb-8 text-3xl cursor-pointer"></IoCloseOutline>
							<Link>Collection</Link>
							<Link>Collection</Link>
							<Link>Collection</Link>
							<Link>Collection</Link>
						</section>
					</div>
				</div>
				<div>
					<img
						className="w-auto rounded-full max-h-12 "
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6L3sOn3ZVY3Uv4TEoDGVtTM4ewYZYwjiu-L0HoTBNYM58ZvDSD80c_6HwD8CTh5baNY&usqp=CAU"
						alt=""
					/>
				</div>
			</nav>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-400" />
		</main>
	);
}
