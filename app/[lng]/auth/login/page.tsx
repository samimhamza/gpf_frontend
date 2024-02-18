import { LoginForm } from "../../../../components/auth/login-form";

const LoginPage = async ({
	params: { lng },
}: {
	params: {
		lng: string;
	};
}) => {
	return (
		<div>
			<LoginForm lng={lng} />
		</div>
	);
};

export default LoginPage;
