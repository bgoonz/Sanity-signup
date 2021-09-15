export default {
    "type": "object",
    "name": "review_item",
    "title": "Review Item",
    "fields": [
        {
            "type": "string",
            "name": "author",
            "title": "Author",
            "validation": null
        },
        {
            "type": "image",
            "name": "avatar",
            "title": "Author Image",
            "validation": null
        },
        {
            "type": "string",
            "name": "avatar_alt",
            "title": "Author Image Alt Text",
            "validation": null
        },
        {
            "type": "text",
            "name": "content",
            "title": "Content",
            "validation": null
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "review_item"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "author"
        }
    }
}