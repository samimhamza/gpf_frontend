import { LoginForm } from "../../../../components/auth/login-form";

const LoginPage = async ({
	params: { lng },
}: {
	params: {
		lng: string;
	};
}) => {
	return <LoginForm lng={lng} />;
};

export default LoginPage;
