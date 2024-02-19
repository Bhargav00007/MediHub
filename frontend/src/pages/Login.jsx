import natureImg from "../img/nature.jpg";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Break from "../components/Break";
import BottomWarning from "../components/BottomWarning";
import Logo from "../components/Logo";

function Login() {
	return (
		<section className="bg-blue-50 min-h-screen flex items-center justify-center">
			<div className="bg-blue-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
				<div className=" flex">
					{/* form */}
					<div className="sm:w-1/2">
						<Logo></Logo>
						<p className="text-sm text-gray-500 mt-4 mb-3 ">
							Enter your credentials to access your account
						</p>
						<form
							className="flex flex-col gap-4"
							action="">
							<InputBox
								type={"email"}
								placeholder={"Email"}
								label={"email"}></InputBox>
							<InputBox
								type={"password"}
								placeholder={"Password"}
								label={"password"}></InputBox>
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

export default Login;
