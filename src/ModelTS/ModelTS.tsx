interface ContElement {
    code: string;
    name: string;
}

interface ContData {
    continents: ContElement[];
}

interface Countries {
    name: string;
    code: string;
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
    conCode: string;
    code: any;
}


export type {ContData, ContElement};

export type {Cont, ParamTypes};

