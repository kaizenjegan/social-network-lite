module.exports = {
    PostType: {
        user:  (_, args, { dataSources })=> {
            return dataSources.mockAPI.getUser({userId: _.user.id})

        },
        comment:  (_, args, { dataSources })=> {
            return dataSources.mockAPI.getComment(_.comment)
        },
        reaction:  (_, args, { dataSources })=> {
            console.log(_);
            return dataSources.mockAPI.getReaction(_.reaction);
        }
    },
    Query: {
        dashboard: (_, {userId}, { dataSources }) =>
            dataSources.mockAPI.getPosts({userId})
    }
}