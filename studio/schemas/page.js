export default {
    "type": "document",
    "name": "page",
    "title": "Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The text shown below the page title",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "description": "The image shown below the page title",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Image Alt Text",
            "description": "The alt text of the image",
            "validation": null
        },
        {
            "type": "stackbit_page_meta",
            "name": "seo",
            "title": "Seo",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
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
                    "page"
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