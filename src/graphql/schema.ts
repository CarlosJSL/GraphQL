import {makeExecutableSchema} from 'graphql-tools'

const SchemaDefinition = `
    typeSchema{
            query: Query
            mutation: Mutation
    }
`

export default makeExecutableSchema({typeDefs,resolvers})