export interface UserInterface {
	id: string;
	name: string;
	email: string;
	phone: string;
	amount: string;
	photo_url: string;
	status: string;
}

export interface EadApiResponse {
	total: number;
	offset: number;
	rows: number;
	users: UserInterface[];
}

export interface UserByQueryInterface {
	search: UserInterface[] | null;
	status: string;
	msg: string;
}

export interface UsersInitialStateInterface {
	users: UserInterface[] | null;
	status: string;
	AdimplenteTotal: number;
	Inadimplentes: number;
	Adimplentes: number;
}

export interface initialStateInterface {
	user: UserInterface | undefined;
	status: string;
}