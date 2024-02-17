import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
	const session = await getServerSession(authOptions);

	return <div>{JSON.stringify(session?.user)}</div>;
};
export default Dashboard;
