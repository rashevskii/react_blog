import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import Login from '../pages/Login';
import { privateRoutes, publicRoutes } from '../routes';
import Error from './errors/Error';
import Loader from './loader/Loader';

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext);

	if (isLoading) {
		return <Loader />;
	}
	return (
		<div>
			{
				isAuth ? <Routes>
					{privateRoutes.map((rout) => {
						return (
							<Route
								key={rout.path}
								path={rout.path}
								element={rout.component}
							/>
						);
					})}
					<Route path="*" element={<Error />} />
				</Routes> :
				<Routes>
					{publicRoutes.map((rout) => {
						return (
							<Route
								key={rout.path}
								path={rout.path}
								element={rout.component}
							/>
						);
					})}
					<Route path="*" element={<Login />} />
				</Routes>}
		</div>
	);
};

export default AppRouter;
