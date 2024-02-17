import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
	const session = await getServerSession(authOptions);
	console.log(session);

	return <div>dfsd</div>;
};
export default Dashboard;
