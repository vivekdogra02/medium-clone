export default {
    name: "comment",
    type: "document",
    title: "Comment",
    fields: [{
            name: "name",
            type: "string"
        },
        {
            name: "Approved",
            type: "boolean",
            title: "Approved",
            description: "Comments won't show on the site without approval"
        },
        {
            name: "email",
            type: "string"
        },
        {
            name: "comment",
            type: "text"
        },
        {
            name: "post",
            type: 'reference',
            to: [{ type: "post" }]
        }
    ]
}