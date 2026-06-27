export interface RandomUser {
    name: {title: string; first: string; last: string};
    picture: {large: string; medium: string; thumbnail: string};
}

export interface RandomUserApiResponse {
    results: RandomUser[];
    info: {seed: string; results: number; page: number; version:string}
}

export interface CrewMember {
    name: string;
    avatar: string;
}