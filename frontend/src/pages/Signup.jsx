import natureImg from "../img/nature.jpg";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Break from "../components/Break";
import BottomWarning from "../components/BottomWarning";
import Logo from "../components/Logo";

function Signup() {
	return (
		<section className="bg-gray-200 min-h-screen flex items-center justify-center">
			<div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
				<div className=" flex">
					<div className="sm:w-1/2">
						<Logo></Logo>
						<p className="text-sm text-gray-500 mt-4 mb-3 ">
							Enter your information to create an account
						</p>
						<form
							className="flex flex-col gap-4"
							action="">
							<InputBox
								type={"firstname"}
								placeholder={"First Name"}
								label={"firstname"}></InputBox>
							<InputBox
								type={"lastname"}
								placeholder={"Last Name"}
								label={"lastname"}></InputBox>
							<InputBox
								type={"email"}
								placeholder={"Email"}
								label={"email"}></InputBox>
							<InputBox
								type={"password"}
								placeholder={"Password"}
								label={"password"}></InputBox>
							<Button label={"Sign Up"}></Button>
						</form>
						<Break></Break>
						{/* <Link></Link> */}
						<BottomWarning
							label={"Already have an account?"}
							buttonText={"Log In"}
							to={"/login"}></BottomWarning>
					</div>

					{/* image */}
					<div className="sm:block hidden w-1/2 p-5 ">
						<img
							className=" rounded-2xl"
							src={natureImg}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Signup;
