import { createContext } from 'react';

export const AuthContext = createContext({
	name: null,
	isAnon: true,
	email: null,
	getUser: () => {},
	login: (name, email) => {},
	logout: () => {}
});
