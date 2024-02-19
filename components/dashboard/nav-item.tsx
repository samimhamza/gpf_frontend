export const navItems = [
	{
		title: "صفحعه اصلی",
		link: "/dashboard",
		icon: (
			<svg
				className="h-5 w-5"
				fill="currentColor"
				strokeWidth={0}
				version="1.1"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z" />
			</svg>
		),
	},
	{
		title: "مناطق تحت پوشش",
		link: "/coverage_areas",
		icon: (
			<svg
				stroke="currentColor"
				className="h-5 w-5"
				fill="currentColor"
				viewBox="0 0 576 512"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
			</svg>
		),
	},
	{
		title: "متقضیان",
		link: "/users/applicants",
		icon: (
			<svg
				className="h-5 w-5"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 640 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"></path>
			</svg>
		),
	},
	{
		title: "سروی",
		link: "/users/survey",
		icon: (
			<svg
				className="h-5 w-5"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={0}
				viewBox="0 0 24 24"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M17 2V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM9 16V18H7V16H9ZM9 13V15H7V13H9ZM9 10V12H7V10H9ZM15 4H9V6H15V4Z" />
			</svg>
		),
	},
	{
		title: "خانواده ها",
		link: "/users/familly",
		icon: (
			<svg
				className="h-5 w-5"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={0}
				viewBox="0 0 24 24"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0018.06 7h-.12a2 2 0 00-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z" />
			</svg>
		),
	},
	{
		title: "توزیع پلان",
		link: "/users/plan_distribution",
		icon: (
			<svg
				className="h-5 w-5"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={0}
				viewBox="0 0 24 24"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0018.06 7h-.12a2 2 0 00-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z" />
			</svg>
		),
	},
	{
		title: "اجناس",
		link: "/users/goods",
		icon: (
			<svg
				className="h-5 w-5"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={0}
				viewBox="0 0 24 24"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0018.06 7h-.12a2 2 0 00-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z" />
			</svg>
		),
	},
	{
		title: "راپور",
		link: "/dashboard/reports",
		icon: (
			<svg
				className="h-5 w-5"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
				<path d="M18 14v4h4" />
				<path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
				<path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
				<path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M8 11h4" />
				<path d="M8 15h3" />
			</svg>
		),
	},
];
