export default {
    "type": "object",
    "name": "section_hero",
    "title": "Hero Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Section ID",
            "description": "A unique identifier of the section, must not contain whitespace",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "The text content of the section",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "description": "The image of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Image Alt Text",
            "description": "The alt text of the section image",
            "validation": null
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Action Buttons",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
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
                    "section_hero"
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
            "title": "title"
        }
    }
}