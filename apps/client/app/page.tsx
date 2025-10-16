import type { User } from "@ws/db";

async function getUsers(): Promise<User[]> {
	const res = await fetch("http://localhost:5000/users");
	return res.json();
}

export default async function Page() {
	const users = await getUsers();
	return (
		<main className="p-4">
			<h1 className="text-xl font-bold">Users</h1>
			<ul>
				{users.map((p) => (
					<li key={p.id}>{p.name}</li>
				))}
			</ul>
		</main>
	);
}
