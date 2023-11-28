import LoginForm from "../../Components/LoginOrSignUp/LoginForm";

const LoginPage = () => {
    return (
    <div className=" bg-white h-full md: mx-auto">
        <div className="text-gray text-center text-lg">Social Circle</div>
        <hr className="border-none h-px my-20px bg-black my-2" />
        <LoginForm />
    </div>
    )
}

export default LoginPage;