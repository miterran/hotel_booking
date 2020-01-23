export const setNewUserRegisterSuccessful = (newUser) => ({
	type: 'NEW_USER_REGISTER_SUCCESSFUL',
	payload: newUser
});

export const setUserLoginSuccessful = (user) => ({
	type: 'USER_LOGIN_SUCCESSFUL',
	payload: user
});

export const setUserLogout = () => ({
	type: 'USER_LOGOUT'
});
