module.exports = class MockAPI {
    constructor(){

    }

    getComment(comments){
        //1,2,3,4,5,6,7
        const CommentDatabase = [{
                id: 1,
                body: "one comment body",
                createdDate: "1/1/2010",
                userId: 1
            },{
                id: 2,
                body: "two comment body",
                createdDate: "1/1/2010",
                userId: 1
            }, {
                id: 3,
                body: "three comment body",
                createdDate: "1/1/2010",
                userId: 1
            },{
                id: 4,
                body: "four comment body",
                createdDate: "1/1/2010",
                userId: 1
            },{
                id: 5,
                body: "five comment body",
                createdDate: "1/1/2010",
                userId: 1
            },{
                id: 6,
                body: "six comment body",
                createdDate: "1/1/2010",
                userId: 1
            },{
                id: 7,
                body: "seven comment body",
                createdDate: "1/1/2010",
                userId: 1
            },{
                id: 8,
                body: "eight comment body",
                createdDate: "1/1/2010",
                userId: 1
            },{
                id: 9,
                body: "nine comment body",
                createdDate: "1/1/2010",
                userId: 1
            }
        ];

        return CommentDatabase.filter(comment => {
            return comments.includes(comment.id);
        });
    }

    getReaction(reactions){

        const ReactionDatabase = [
            {
                id: 10,
                like: 23,
                love: 3,
                celebration: 7,
                insightful: 2,
                user: 1,
                createdDate: "10/12/2020"
            },
            {
                id: 11,
                like: 29,
                love: 31,
                celebration: 7000,
                insightful: 210,
                user: 1,
                createdDate: "10/12/2020"
            },
            {
                id: 12,
                like: 223,
                love: 4,
                celebration: 777,
                insightful: 210,
                user: 1,
                createdDate: "10/12/2020"
            },
            {
                id: 13,
                like: 24,
                love: 3000,
                celebration: 70,
                insightful: 112,
                user: 1,
                createdDate: "10/12/2020"
            },
            {
                id: 14,
                like: 230,
                love: 16,
                celebration: 9,
                insightful: 14,
                user: 1,
                createdDate: "10/12/2020"
            },
            {
                id: 15,
                like: 53,
                love: 5,
                celebration: 8,
                insightful: 6,
                user: 1,
                createdDate: "10/12/2020"
            },
            {
                id: 16,
                like: 36,
                love: 5,
                celebration: 8,
                insightful: 3,
                user: 1,
                createdDate: "10/12/2020"
            },
            {
                id: 17,
                like: 13,
                love: 5,
                celebration: 2,
                insightful: 7,
                user: 1,
                createdDate: "10/12/2020"
            },
            {
                id: 18,
                like: 3,
                love: 13,
                celebration: 2,
                insightful: 1,
                user: 1,
                createdDate: "10/12/2020"
            }
        ];

        return ReactionDatabase.filter(reaction => {
            return reactions.includes(reaction.id)
        })
    }

    getUser({userId}){
        const user = {
            id: 1,
            username: "joeblow",
            avatar: "/some/avatar.png"
        };

        return user;
    }
    getPosts({userId}){

        return [{
                    id: "c340443a-ca4e-4bd3-abc2-9e819c41d7eb",
                    user: 1,
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
                    image: "/some/postimage.png",
                    comment: [1, 2, 3],
                    reaction: [16, 17, 18]
                },
                {
                    id: "8f8ad67a-6a39-4200-8fcf-541fe857ec56",
                    user: 1,
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
                    image: "/some/postimage.png",
                    comment: [4, 5, 6],
                    reaction: [13, 14, 15]
                },
                {
                    id: "cc4a4a5e-0f49-4de8-ad4a-ed2d800689e5",
                    user: 1,
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
                    image: "/some/postimage.png",
                    comment: [7, 8, 9],
                    reaction: [10, 11, 12]
                }
        ]
    }
}