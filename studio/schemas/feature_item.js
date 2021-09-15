export default {
    "type": "object",
    "name": "feature_item",
    "title": "Feature Item",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Feature description",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "description": "Feature image",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Image Alt Text",
            "description": "The alt text of the feature image",
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
                    "feature_item"
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