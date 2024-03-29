import natureImg from "../img/nature.jpg";
import Button from "../components/Button";
import Break from "../components/Break";
import BottomWarning from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.email("Invalid Email address")
				.required("Email is required"),
			password: Yup.string()
				.min(6, "Password must be 6 characters or more")
				.max(18, "Password must be 18 characters or less")
				.required("Password is required"),
		}),
		onSubmit: async (values) => {
			try {
				const res = await axios.post(
					"http://localhost:3000/api/v1/user/login",

					values
				);

				if (res.status === 200) {
					localStorage.setItem("token", res.data.token);
					toast.success("User Login", {
						theme: "light",
						autoClose: 1200,
					});
					setTimeout(() => {
						navigate("/reports");
						window.location.reload();
						console.log(localStorage.token);
					}, 2000);
				}
			} catch (e) {
				toast.warn("Email doesn't exist / Incorrect inputs", {
					theme: "light",
					autoClose: 1200,
				});
			}
		},
	});
	return (
		<section className="flex items-center justify-center min-h-screen bg-blue-50">
			<div className="flex max-w-3xl p-5 bg-blue-100 shadow-lg rounded-2xl">
				<div className="flex ">
					{/* form */}
					<div className="sm:w-1/2">
						<Logo></Logo>
						<p className="mt-4 mb-3 text-sm text-gray-500 ">
							Enter your credentials to access your account
						</p>
						<form
							onSubmit={formik.handleSubmit}
							className="flex flex-col gap-1"
							action="">
							<div className="flex flex-col">
								<label
									htmlFor="username"
									className="px-1 text-xs">
									Email
								</label>
								<input
									className="p-1 text-sm border-2 border-gray-200 outline-none rounded-xl focus:border-blue-300"
									type="Email"
									name="username"
									placeholder="Enter your Last Name"
									value={formik.values.username}
									onChange={formik.handleChange}
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="password"
									className="px-1 text-xs">
									Password
								</label>
								<input
									className="p-1 border-2 border-gray-200 outline-none rounded-xl focus:border-blue-300"
									type="Password"
									name="password"
									placeholder="Enter your Password"
									value={formik.values.password}
									onChange={formik.handleChange}
								/>
							</div>
							<Button label={"Log In"}></Button>
						</form>
						<Break></Break>
						{/* <Link></Link> */}
						<BottomWarning
							label={"Don't have an account?"}
							buttonText={"Sign Up"}
							to={"/signup"}></BottomWarning>
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

export default Login;
