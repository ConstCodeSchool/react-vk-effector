import { useStore } from "effector-react";
import { $session, login, logout } from "./store";

function App() {
	const { loading, user, isAuthenticated } = useStore($session);

	if (loading) {
		return <p>Загрзука...</p>;
	}

	if (!isAuthenticated) {
		return <button onClick={login}>Авторизоваться</button>;
	}

	return (
		<div>
			<p>
				<a href={user.href} target="_blank" rel="noreferrer">
					{user.first_name} {user.last_name}
				</a>
			</p>
			<button onClick={logout}>Разлогиниться</button>
		</div>
	);
}

export default App;
