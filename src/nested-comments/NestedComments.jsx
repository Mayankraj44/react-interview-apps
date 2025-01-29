
const data=[
    {
        author: "John Doe",
        comment:"Testing Parent 1",
        replies:[]
    },
    {
        author: "John Doe 2",
        comment:"Testing Parent 2",
        replies:[
            {
                author: "John Doe 2.1",
                comment:"Testing Child 2.1",
                replies:[
                    {
                        author: "John Doe 2.1.1",
                        comment:"Testing Child 2.1.1",
                        replies:[]
                    },
                    {
                        author: "John Doe 2.1.2",
                        comment:"Testing Child 2.1.2",
                        replies:[]
                    },
                ]
            },
            {
                author: "John Doe 2.2",
                comment:"Testing Parent 2.2",
                replies:[]
            },
            {
                author: "John Doe 2.3",
                comment:"Testing Parent 2.3",
                replies:[]
            },
        ]
    },
    {
        author: "John Doe 3",
        comment:"Testing Parent 3",
        replies:[
            {
                author: "John Doe 3.1",
                comment:"Testing child 3.1",
                replies:[]
            }
        ]
    }
]

export default function NestedComments(){
    return <>NEsted Comments</>
}