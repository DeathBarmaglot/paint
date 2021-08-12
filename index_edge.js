/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_1',
                type: 'image',
                rect: ['0px', '-6px','960px','639px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px']
            },
            {
                id: '_4',
                type: 'image',
                rect: ['0px', '-6px','300px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.jpg",'0px','0px']
            },
            {
                id: '_3',
                type: 'image',
                rect: ['0px', '-6px','300px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.jpg",'0px','0px']
            },
            {
                id: '_2',
                type: 'image',
                rect: ['0px', '-17px','300px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.jpg",'0px','0px']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['0px', '9px','131px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: '_13',
                type: 'image',
                rect: ['-22px', '139px','344px','179px','auto', 'auto'],
                clip: ['rect(-2.5px 344px 30.66656494140625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','-49.166870117188px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'a3',
                type: 'image',
                rect: ['33px', '72px','234px','96px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a3.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__1}": [
                ["transform", "style", 'preserve-3d'],
                ["transform", "rotateY", '0deg'],
                ["style", "perspective", '1000px'],
                ["style", "height", '200px'],
                ["style", "opacity", '0'],
                ["style", "background-position", [0,-210], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '300px']
            ],
            "${_logo}": [
                ["style", "top", '9px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '131px']
            ],
            "${_a3}": [
                ["style", "top", '72px'],
                ["style", "height", '96px'],
                ["style", "opacity", '0'],
                ["style", "left", '33px'],
                ["style", "width", '234px']
            ],
            "${__4}": [
                ["style", "top", '-6px'],
                ["transform", "rotateY", '0deg'],
                ["style", "left", '0px'],
                ["style", "height", '200px'],
                ["style", "opacity", '0'],
                ["style", "background-position", [0,-190], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '300px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${__13}": [
                ["style", "top", '139px'],
                ["transform", "scaleY", '0.8'],
                ["style", "background-position", [0,-49.166870117188], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '-22px'],
                ["style", "clip", [-2.5,344,30.66656494140625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__2}": [
                ["style", "top", '-17px'],
                ["transform", "rotateY", '0deg'],
                ["style", "left", '0px'],
                ["style", "height", '200px'],
                ["style", "opacity", '0'],
                ["style", "background-position", [0,-190], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '300px']
            ],
            "${__3}": [
                ["style", "top", '-6px'],
                ["transform", "rotateY", '0deg'],
                ["style", "left", '0px'],
                ["style", "height", '200px'],
                ["style", "opacity", '0'],
                ["style", "background-position", [0,-190], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23000,
            autoPlay: true,
            timeline: [
                { id: "eid61", tween: [ "style", "${_logo}", "width", '175px', { fromValue: '131px'}], position: 19296, duration: 831, easing: "easeInOutCubic" },
                { id: "eid88", tween: [ "style", "${_a3}", "opacity", '1', { fromValue: '0'}], position: 19627, duration: 352, easing: "easeInOutCubic" },
                { id: "eid59", tween: [ "style", "${_logo}", "height", '40px', { fromValue: '30px'}], position: 19296, duration: 831, easing: "easeInOutCubic" },
                { id: "eid38", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 426, easing: "easeInOutCubic" },
                { id: "eid39", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '1'}], position: 19296, duration: 372, easing: "easeInOutCubic" },
                { id: "eid83", tween: [ "style", "${__13}", "background-position", [0,0.33294696484375], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-49.166870117188]}], position: 4824, duration: 676, easing: "easeInOutCubic" },
                { id: "eid85", tween: [ "style", "${__13}", "background-position", [0,-99.167175105469], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0.33294696484375]}], position: 9648, duration: 676, easing: "easeInOutCubic" },
                { id: "eid86", tween: [ "style", "${__13}", "background-position", [0,-150.66711396484], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0.000000,-99.167175]}], position: 14472, duration: 676, easing: "easeInOutCubic" },
                { id: "eid36", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 5191, duration: 336, easing: "easeInOutCubic" },
                { id: "eid37", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '1'}], position: 9648, duration: 352, easing: "easeInOutCubic" },
                { id: "eid57", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid67", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 4824, duration: 352, easing: "easeInOutCubic" },
                { id: "eid65", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 5176, duration: 324, easing: "easeInOutCubic" },
                { id: "eid68", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 9648, duration: 352, easing: "easeInOutCubic" },
                { id: "eid69", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 324, easing: "easeInOutCubic" },
                { id: "eid70", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 14472, duration: 352, easing: "easeInOutCubic" },
                { id: "eid71", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 14824, duration: 324, easing: "easeInOutCubic" },
                { id: "eid89", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 19296, duration: 831, easing: "easeInOutCubic" },
                { id: "eid34", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 352, easing: "easeInOutCubic" },
                { id: "eid35", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 14472, duration: 278, easing: "easeInOutCubic" },
                { id: "eid72", tween: [ "style", "${__13}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeInOutCubic" },
                { id: "eid73", tween: [ "style", "${__13}", "opacity", '0', { fromValue: '1'}], position: 4824, duration: 352, easing: "easeInOutCubic" },
                { id: "eid74", tween: [ "style", "${__13}", "opacity", '1', { fromValue: '0'}], position: 5176, duration: 324, easing: "easeInOutCubic" },
                { id: "eid75", tween: [ "style", "${__13}", "opacity", '0', { fromValue: '1'}], position: 9648, duration: 352, easing: "easeInOutCubic" },
                { id: "eid76", tween: [ "style", "${__13}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 324, easing: "easeInOutCubic" },
                { id: "eid77", tween: [ "style", "${__13}", "opacity", '0', { fromValue: '1'}], position: 14472, duration: 352, easing: "easeInOutCubic" },
                { id: "eid78", tween: [ "style", "${__13}", "opacity", '1', { fromValue: '0'}], position: 14824, duration: 324, easing: "easeInOutCubic" },
                { id: "eid79", tween: [ "style", "${__13}", "opacity", '0', { fromValue: '1'}], position: 19296, duration: 352, easing: "easeInOutCubic" },
                { id: "eid54", tween: [ "style", "${__4}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-190]}], position: 14472, duration: 704, easing: "easeInOutCubic" },
                { id: "eid55", tween: [ "style", "${__4}", "background-position", [0,194], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 19296, duration: 704, easing: "easeInOutCubic" },
                { id: "eid47", tween: [ "style", "${__2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-190]}], position: 9648, duration: 704, easing: "easeInOutCubic" },
                { id: "eid48", tween: [ "style", "${__2}", "background-position", [0,194], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 14472, duration: 704, easing: "easeInOutCubic" },
                { id: "eid28", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid33", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 4824, duration: 367, easing: "easeInOutCubic" },
                { id: "eid56", tween: [ "style", "${__1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-210]}], position: 0, duration: 750, easing: "easeInOutCubic" },
                { id: "eid45", tween: [ "style", "${__1}", "background-position", [0,194], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4824, duration: 704, easing: "easeInOutCubic" },
                { id: "eid58", tween: [ "style", "${_logo}", "left", '73px', { fromValue: '0px'}], position: 19296, duration: 331, easing: "easeInOutCubic" },
                { id: "eid60", tween: [ "style", "${_logo}", "left", '52px', { fromValue: '73px'}], position: 19628, duration: 500, easing: "easeInOutCubic" },
                { id: "eid49", tween: [ "style", "${__3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-190]}], position: 4824, duration: 704, easing: "easeInOutCubic" },
                { id: "eid52", tween: [ "style", "${__3}", "background-position", [0,194], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 9648, duration: 704, easing: "easeInOutCubic" }            ]
        }
    }
},
"Symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '300px', '200px', 'auto', 'auto'],
                    id: '_1',
                    type: 'image',
                    autoOrient: false,
                    fill: ['rgba(0,0,0,0)', 'images/1.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__1}": [
                ["style", "height", '200px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '300px']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3523181");
