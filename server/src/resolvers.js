module.exports = {
    Query: {
        dashboard: (_, {id}, { dataSources }) =>
            dataSources.mockAPI.getDashboard(id)
    }
}