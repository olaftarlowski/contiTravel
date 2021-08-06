import { gql } from '@apollo/client';

export const LOAD_CONTINENTS = gql`
query {
    continents {
    code
    name
    }
}
`;

export const LOAD_COUNTRIES = gql`
query continent ($code: ID!) {
    continent (code: $code) {
    code
    name
    countries {
        name
        code
        emoji 
        languages {
            name
        }
    }
    }
}
`;
