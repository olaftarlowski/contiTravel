import {gql} from '@apollo/client';

export const LOAD_CONTINENTS = gql`
query {
    continents {
    code
    name
    }
}
`;

export const LOAD_CONTINENTS_COUNTRIES = gql`
query {
    continents {
    code
    name
    countries {
      	code
        name
      	emoji
        languages {
        name
        }
    }
    }
}
`;
