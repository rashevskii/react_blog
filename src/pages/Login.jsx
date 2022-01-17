import React, { useContext } from 'react';
import MyButton from '../components/UI/buttons/MyButton';
import MyInput from '../components/UI/inputs/MyInput';
import { AuthContext } from '../context';

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const login = (event) => {
		event.preventDefault();
		localStorage.setItem("auth", "true")
		setIsAuth(true);
	};

	return (
		<div>
			<h1>Страница авторизации</h1>
			<form onSubmit={login}>
				<MyInput type="text" placeholder="Введите имя" />
				<MyInput type="password" placeholder="Введите пароль" />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	);
};

export default Login;
