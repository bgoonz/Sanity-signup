export default {
    "type": "document",
    "name": "person",
    "title": "Person",
    "fields": [
        {
            "type": "string",
            "name": "first_name",
            "title": "First Name",
            "validation": null
        },
        {
            "type": "string",
            "name": "last_name",
            "title": "Last Name",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "bio",
            "title": "Bio",
            "validation": null
        },
        {
            "type": "image",
            "name": "photo",
            "title": "Photo",
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
                    "person"
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
                    "data"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "first_name"
        }
    }
}