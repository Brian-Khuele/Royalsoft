import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
	{
		path: "/",
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{
				path: "",
				component: () => import("pages/Index.vue"),
				children: [
					{
						path: "learner/register",
						component: () => import("components/Register.vue"),
					},
					{
						path: "learners",
						component: () => import("components/Learners.vue"),
					},
					{
						path: "admin",
						component: () => import("components/Admin.vue"),
					},
					{
						path: "parents",
						component: () => import("components/Parent.vue"),
					},
					{
						path: "applications",
						component: () => import("components/applications.vue"),
					},
				],
			},
		],
	},
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
	routes.push({
		path: "*",
		component: () => import("pages/Error404.vue"),
	});
}

export default routes;
