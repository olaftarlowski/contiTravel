interface ContElement {
    code: string;
    name: string;
}

interface ContData {
    continents: ContElement[];
}

interface CountryLanguages {
    name: string;
}

interface Countries {
    name: string;
    code: string;
    emoji: string;
    languages: CountryLanguages[];
}

interface ContEl {
    code: string;
    name: string;
    countries: Countries[];
}

interface Cont {
    continent: ContEl;
}

interface ParamTypes {
    continentCode: string;
    code: any;
}


export type { ContData, ContElement };

export type { Cont, ParamTypes };

export type { Countries };

