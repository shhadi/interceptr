// SAMPLE
this.manifest = {
    "name": "Interceptr",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("trello"),
            "group": i18n.get("authorize"),
            "name": "authorize",
            "type": "hidden",            
            "label": i18n.get("trello_authorize")
        }
        // ,{
        //     "tab": "Details",
        //     "group": "Sound",
        //     "name": "noti_volume",
        //     "type": "slider",
        //     "label": "Notification volume:",
        //     "max": 1,
        //     "min": 0,
        //     "step": 0.01,
        //     "display": true,
        //     "displayModifier": function (value) {
        //         return (value * 100).floor() + "%";
        //     }
        // }
        ,{
            "tab": "Rules",
            "group": "Rules",
            "name": "rules",
            "type": "description",
            "text": i18n.get("rules_description")
        }
        // {
        //     "tab": "Details",
        //     "group": "Sound",
        //     "name": "sound_volume",
        //     "type": "slider",
        //     "label": "Sound volume:",
        //     "max": 100,
        //     "min": 0,
        //     "step": 1,
        //     "display": true,
        //     "displayModifier": function (value) {
        //         return value + "%";
        //     }
        // }
    ]
    // ,
    // "alignment": [
    //     [
    //         "password",
    //         "username"
    //     ],
    //     [
    //         "noti_volume",
    //         "sound_volume"
    //     ]
    // ]
};
