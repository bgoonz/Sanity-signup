export default {
    "type": "object",
    "name": "faq_item",
    "title": "FAQ Item",
    "fields": [
        {
            "type": "text",
            "name": "question",
            "title": "Question",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "answer",
            "title": "Answer",
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
                    "faq_item"
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
            "title": "type"
        }
    }
}