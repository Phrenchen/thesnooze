YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "ArtComponent",
        "ArtItem",
        "ArtService",
        "CloudcastItem",
        "CloudcastUserBlob",
        "GalleryComponent",
        "Item",
        "MenuComponent",
        "MixcloudComponent",
        "MixcloudService",
        "MixcloudUser",
        "User",
        "UserBlob"
    ],
    "modules": [
        "Art",
        "Mixcloud",
        "app",
        "shared"
    ],
    "allModules": [
        {
            "displayName": "app",
            "name": "app",
            "description": "contains a list of buttons. static html only, so far"
        },
        {
            "displayName": "Art",
            "name": "Art",
            "description": "value object"
        },
        {
            "displayName": "Mixcloud",
            "name": "Mixcloud",
            "description": "* concrete item variant\n* Mixcloud specific values"
        },
        {
            "displayName": "shared",
            "name": "shared",
            "description": "basic class to handle items as entities"
        }
    ],
    "elements": []
} };
});