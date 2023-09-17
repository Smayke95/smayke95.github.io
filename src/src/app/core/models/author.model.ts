import { Picture } from "./picture.model";

export class Author {
    id: number = 0;
    name: string = '';
    role: string = '';
    picture: Picture = new Picture();
    shortBio: string = '';
    longBio: string = '';
    gitHub: string | null = null;
    linkedIn: string | null = null;
    nuget: string | null = null;
    facebook: string | null = null;
    instagram: string | null = null;
}