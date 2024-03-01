import natureImg from "../img/nature.jpg";
import Button from "../components/Button";
import Break from "../components/Break";
import BottomWarning from "../components/BottomWarning";
import Logo from "../components/Logo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},

		validationSchema: Yup.object({
			name: Yup.string()
				.max(18, "Name must be 18 characters or less")
				.required("Name is required"),
			email: Yup.string()
				.email("Invalid Email address")
				.required("Email is required"),
			password: Yup.string()
				.min(6, "Password must be 6 characters or more")
				.max(18, "Password must be 18 characters or less")
				.required("Password is required"),
		}),

		onSubmit: async (values) => {
			console.log(values);
			const data = {
				name: values.name,
				username: values.email,
				password: values.password,
			};
			try {
				const res = await axios.post(
					"http://localhost:3000/api/v1/user/signup",
					data,
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				if (res.status === 200) {
					localStorage.token = res.data.token;
					toast.success("User Created", {
						theme: "light",
						autoClose: 1200,
					});
					setTimeout(() => {
						navigate("/reports");
					}, 2000);
				}
			} catch (e) {
				toast.warn("Email already taken / Incorrect inputs", {
					theme: "light",
					autoClose: 1200,
				});
			}
		},
	});

	const navigate = useNavigate();
	return (
		<section className="flex items-center justify-center min-h-screen bg-blue-50 ">
			<div className="flex max-w-3xl p-5 bg-blue-100 shadow-lg rounded-2xl">
				<div className="flex ">
					<div className="sm:w-1/2">
						<Logo></Logo>
						<p className="mt-4 mb-3 text-sm text-gray-500 ">
							Enter your information to create an account
						</p>
						<form
							onSubmit={formik.handleSubmit}
							className="flex flex-col gap-1"
							action="">
							<div className="flex flex-col ">
								<label
									htmlFor="name"
									className={`px-1 text-xs ${
										formik.touched.name &&
										formik.errors.name
											? "text-red-500"
											: ""
									}`}>
									{formik.touched.name && formik.errors.name
										? formik.errors.name
										: "Name"}
								</label>
								<input
									className="p-1 text-base border-2 border-gray-200 outline-none rounded-xl focus:border-blue-300"
									type="text"
									name="name"
									id="name"
									placeholder="Enter your Name"
									value={formik.values.name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>

							<div className="flex flex-col mt-2">
								<label
									htmlFor="email"
									className={`px-1 text-xs ${
										formik.touched.email &&
										formik.errors.email
											? "text-red-500"
											: ""
									}`}>
									{formik.touched.email && formik.errors.email
										? formik.errors.email
										: "Email"}
								</label>
								<input
									className="p-1 text-sm border-2 border-gray-200 outline-none rounded-xl focus:border-blue-300"
									type="Email"
									name="email"
									id="email"
									placeholder="Enter your Email address"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>
							<div className="flex flex-col mt-2">
								<label
									htmlFor="password"
									className={`px-1 text-xs ${
										formik.touched.password &&
										formik.errors.password
											? "text-red-500"
											: ""
									}`}>
									{formik.touched.password &&
									formik.errors.password
										? formik.errors.password
										: "Password"}
								</label>
								<input
									className="p-1 text-base border-2 border-gray-200 outline-none rounded-xl focus:border-blue-300"
									type="Password"
									name="password"
									id="password"
									placeholder="Enter your Password"
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>

							<Button label={"Sign Up"}></Button>
						</form>
						<Break></Break>
						<BottomWarning
							label={"Already have an account?"}
							buttonText={"Log In"}
							to={"/login"}></BottomWarning>
					</div>

					{/* image */}
					<div className="hidden w-1/2 p-5 sm:block ">
						<img
							className=" rounded-2xl"
							src={natureImg}
						/>
					</div>
				</div>
			</div>
			<ToastContainer />
		</section>
	);
}

export default Signup;
