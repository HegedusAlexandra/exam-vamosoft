import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  query Query {
    user(id: "3OMYGEfNevEnVmvr0rmd8l") {
      name
      profession
      dateOfBirth
      email
    }
  }
`;
