export type UserResponse = {
    total: number;
    data: User[];
}

export type User = {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;
    dateOfBirth: string;
    gender: string;
    phone: string;
    registerDate: string;
    updatedAt: string;
    location: Location;
}

export type Location = {
    city: string;
    country: string;
    state: string;
    street: string;
    timezone: string;
}
