const { ApolloServer, gql } = require('apollo-server');

const students = [
    {
        "id":1,
        "name": "Syed Ali",
        "age": 22,
        "email": "syedaliuzzaman@gmail.com"
    },
    {
        "id":2,
        "name": "Syed Shafiq",
        "age": 28,
        "email": "shafiq@gmail.com"
    },
    {
        "id":3,
        "name": "Syed Sami",
        "age": 26,
        "email": "sami@gmail.com"
    }
]

const resolvers = {
    Query: {
      students: () => students,
    },
  };
  
const typeDefs = gql`

type Student {
    name: String
    email: String
    age: Int
    id: Int
}

type Query {
    students: [Student]
}
`;

const server = new ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
