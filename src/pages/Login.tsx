import { LoginForm } from "@components/Login/LoginForm/LoginForm";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-bgPrimaryColor to-bgSecondColor">
      <LoginForm />
    </div>
  );
};
