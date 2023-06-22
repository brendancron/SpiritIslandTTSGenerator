//get values from localstorage
var spiritName = localStorage.getItem("spiritName");
var complexity = localStorage.getItem("complexity");
var spiritBoardFrontImgUrl = localStorage.getItem("spiritBoardFrontImgUrl");
var spiritBoardBackImgUrl = localStorage.getItem("spiritBoardBackImgUrl");
var presenceTrackData = localStorage.getItem("presenceTrackData");
var leftInnate = localStorage.getItem("leftInnate");
var rightInnate = localStorage.getItem("rightInnate");
var numberUniques = localStorage.getItem("numberUniques");
var card1Url = localStorage.getItem("card1Url");
var card2Url = localStorage.getItem("card2Url");
var card3Url = localStorage.getItem("card3Url");
var card4Url = localStorage.getItem("card4Url");
var card5Url = localStorage.getItem("card5Url");
var card6Url = localStorage.getItem("card6Url");
var cardBackUrl = localStorage.getItem("cardBackUrl");
var card1Data = localStorage.getItem("card1Data");
var card2Data = localStorage.getItem("card2Data");
var card3Data = localStorage.getItem("card3Data");
var card4Data = localStorage.getItem("card4Data");
var card5Data = localStorage.getItem("card5Data");
var card6Data = localStorage.getItem("card6Data");

//set stored values
document.getElementById("spiritName").value = spiritName || "";
document.getElementById("complexity").value = complexity || "";
document.getElementById("spiritBoardFrontImgUrl").value = spiritBoardFrontImgUrl || "";
document.getElementById("spiritBoardBackImgUrl").value = spiritBoardBackImgUrl || "";
document.getElementById("presenceTrackData").value = presenceTrackData || "";
document.getElementById("leftInnate").value = leftInnate || "";
document.getElementById("rightInnate").value = rightInnate || "";
document.getElementById("numberUniques").value = numberUniques || "";
document.getElementById("card1Url").value = card1Url || "";
document.getElementById("card2Url").value = card2Url || "";
document.getElementById("card3Url").value = card3Url || "";
document.getElementById("card4Url").value = card4Url || "";
document.getElementById("card5Url").value = card5Url || "";
document.getElementById("card6Url").value = card6Url || "";
document.getElementById("cardBackUrl").value = cardBackUrl || "";
document.getElementById("card1Data").value = card1Data || "";
document.getElementById("card2Data").value = card2Data || "";
document.getElementById("card3Data").value = card3Data || "";
document.getElementById("card4Data").value = card4Data || "";
document.getElementById("card5Data").value = card5Data || "";
document.getElementById("card6Data").value = card6Data || "";

//save edited values listeners
document.getElementById("spiritName").addEventListener("input", function() {
    localStorage.setItem("spiritName", this.value);
});
document.getElementById("complexity").addEventListener("input", function() {
    localStorage.setItem("complexity", this.value);
});
document.getElementById("spiritBoardFrontImgUrl").addEventListener("input", function() {
    localStorage.setItem("spiritBoardFrontImgUrl", this.value);
});
document.getElementById("spiritBoardBackImgUrl").addEventListener("input", function() {
    localStorage.setItem("spiritBoardBackImgUrl", this.value);
});
document.getElementById("presenceTrackData").addEventListener("input", function() {
    localStorage.setItem("presenceTrackData", this.value);
});
document.getElementById("leftInnate").addEventListener("input", function() {
    localStorage.setItem("leftInnate", this.value);
});
document.getElementById("rightInnate").addEventListener("input", function() {
    localStorage.setItem("rightInnate", this.value);
});
document.getElementById("numberUniques").addEventListener("input", function() {
    localStorage.setItem("numberUniques", this.value);
});
document.getElementById("card1Url").addEventListener("input", function() {
    localStorage.setItem("card1Url", this.value);
});
document.getElementById("card2Url").addEventListener("input", function() {
    localStorage.setItem("card2Url", this.value);
});
document.getElementById("card3Url").addEventListener("input", function() {
    localStorage.setItem("card3Url", this.value);
});
document.getElementById("card4Url").addEventListener("input", function() {
    localStorage.setItem("card4Url", this.value);
});
document.getElementById("card5Url").addEventListener("input", function() {
    localStorage.setItem("card5Url", this.value);
});
document.getElementById("card6Url").addEventListener("input", function() {
    localStorage.setItem("card6Url", this.value);
});
document.getElementById("cardBackUrl").addEventListener("input", function() {
    localStorage.setItem("cardBackUrl", this.value);
});
document.getElementById("card1Data").addEventListener("input", function() {
    localStorage.setItem("card1Data", this.value);
});
document.getElementById("card2Data").addEventListener("input", function() {
    localStorage.setItem("card2Data", this.value);
});
document.getElementById("card3Data").addEventListener("input", function() {
    localStorage.setItem("card3Data", this.value);
});
document.getElementById("card4Data").addEventListener("input", function() {
    localStorage.setItem("card4Data", this.value);
});
document.getElementById("card5Data").addEventListener("input", function() {
    localStorage.setItem("card5Data", this.value);
});
document.getElementById("card6Data").addEventListener("input", function() {
    localStorage.setItem("card6Data", this.value);
});

var keywords = ["energy", "sun", "moon", "fire", "air", "water", "earth", "plant", "animal"];

var complexity = document.getElementById("complexity").value;

var spiritBoardFrontImgUrl = document.getElementById("spiritBoardFrontImgUrl").value;
var spiritBoardBackImgUrl = document.getElementById("spiritBoardBackImgUrl").value;
var presenceTrackData = document.getElementById("presenceTrackData").value;
var leftInnate = document.getElementById("leftInnate").value;
var rightInnate = document.getElementById("rightInnate").value;

var numberUniques = document.getElementById("numberUniques").value;

var card1Url = document.getElementById("card1Url").value;
var card2Url = document.getElementById("card2Url").value;
var card3Url = document.getElementById("card3Url").value;
var card4Url = document.getElementById("card4Url").value;
var card5Url = document.getElementById("card5Url").value;
var card6Url = document.getElementById("card6Url").value;
var cardBackUrl = document.getElementById("cardBackUrl").value;

var card1Data = document.getElementById("card1Data").value;
var card2Data = document.getElementById("card2Data").value;
var card3Data = document.getElementById("card3Data").value;
var card4Data = document.getElementById("card4Data").value;
var card5Data = document.getElementById("card5Data").value;
var card6Data = document.getElementById("card6Data").value;

function genCard(cardUrl, cardData, cardBackUrl) {
    var dataList = cardData.split(",");
    var cardName = dataList[0];
    var cardNameStandardized = cardName.replace(/ /g, "_").replace(/[^A-Za-z_]/g, "");
    var cardSpeed = dataList[1];

    //card data

    var energyElementsDataList = [0,0,0,0,0,0,0,0,0];

    dataList.slice(2).forEach((item) => {
        keywords.forEach((kw) => {
            kwregex = "([0-9]+)(" + kw + ")";
            var match = item.match(kwregex);
            if(match) {
                var count = parseInt(match[1]);
                var index = keywords.indexOf(kw);
                energyElementsDataList[index] = count;
            }
        })
    });

    var energy = energyElementsDataList[0];
    var elements = energyElementsDataList.slice(1).join("");

    //json stuff
    var luaScriptString = "elements=\""+elements+"\"\nenergy="+energy+"\n"
    card = {
        GUID: cardNameStandardized,
        Name: "CardCustom",
        Transform: {
            posX: 0,
            posY: 0,
            posZ: 0,
            rotX: 0,
            rotY: 180,
            rotZ: 0,
            scaleX: 1.53,
            scaleY: 1,
            scaleZ: 1.53
        },
        Nickname: cardName,
        Description: "",
        GMNotes: "",
        AltLookAngle: {
            x: 0,
            y: 0,
            z: 0
        },
        ColorDiffuse: {
            r: 0.7132,
            g: 0.7132,
            b: 0.7132
        },
        Tags: [
            cardSpeed,
            "Unique"
        ],
        LayoutGroupSortIndex: 0,
        Value: 0,
        Locked: false,
        Grid: false,
        Snap: true,
        IgnoreFoW: false,
        MeasureMovement: false,
        DragSelectable: true,
        Autoraise: true,
        Sticky: true,
        Tooltip: true,
        GridProjection: false,
        HideWhenFaceDown: true,
        Hands: true,
        CardID: 45703,
        SidewaysCard: false,
        CustomDeck: {
          457: {
            FaceURL: cardUrl,
            BackURL: cardBackUrl,
            NumWidth: 1,
            NumHeight: 1,
            BackIsHidden: true,
            UniqueBack: false,
            Type: 0
          }
        },
        LuaScript: luaScriptString,
        LuaScriptState: "{\"thresholds\":[]}",
        XmlUI: ""
    }
    return card;
}

function generateJson() {

    //other variable setters

    var spiritNameStandardized = spiritName.replace(/ /g, "_");
    var numUniques = parseInt(numberUniques);

    var containedObjects = [];

    //TODO names and speeds
    var card1 = genCard(card1Url, card1Data, cardBackUrl);
    var card2 = genCard(card2Url, card2Data, cardBackUrl);
    var card3 = genCard(card3Url, card3Data, cardBackUrl);
    var card4 = genCard(card4Url, card4Data, cardBackUrl);

    containedObjects.push(card1, card2, card3, card4);

    if(numUniques > 4) {
        var card5 = genCard(card5Url, card5Data, cardBackUrl);
        containedObjects.push(card5);
    }

    if(numUniques > 5) {
        var card6 = genCard(card6Url, card6Data, cardBackUrl);
        containedObjects.push(card6);
    }

    //Presence Tracks Data
    var trackEnergy = [];
    var trackElements = [];
    var attachedSnapPoints = [];

    presenceSlots = presenceTrackData.split("\n");
    var slotRegex = /\((-?\d+(?:\.\d+)?), (-?\d+(?:\.\d+)?)\)(?::(.+))?/;
    var startRegex = /\(start\)(?::(.+))?/;
    var x = 0;
    var z = 0;
    presenceSlots.forEach((slot) => {
        var match = slot.match(slotRegex);
        var slotData = "";
        if(match) {
            x = parseFloat(match[1]);
            z = parseFloat(match[2]);
            point = {
                Position: {
                    x: x,
                    y: 0.2,
                    z: z
                }
            };
            attachedSnapPoints.push(point);
            slotData = match[3];
        } else {
            match = slot.match(startRegex);
            if(match) {
                //todo idk what these map to, maybe they are just random??
                //don't attach a point for the start but do include with energy
                x = 0.19;
                z = -0.4;
                slotData = match[1];
            } else {
                console.log("PARSE ERROR");
            }
        }

        var result = Array.from({ length: keywords.length }, () => 0);

        if(slotData != undefined && slotData != "") {
            slotData.split(",").forEach(item => {
            var match = item.match(/^(\d+)(\D+)/);
                if (match) {
                    var count = parseInt(match[1]);
                    var keyword = match[2].toLowerCase();

                    var index = keywords.indexOf(keyword);
                    if (index !== -1) {
                    result[index] += count;
                    }
                }
            });
        }

        //track energy
        energy = result[0];
        if(energy > 0) {
            energyData = {
                count: energy,
                position: {
                    x: x,
                    y: 0,
                    z: z
                }
            }
            trackEnergy.push(energyData);
        }

        var elementsArray = result.slice(1);
        var sumElements = elementsArray.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);

        //track elements
        if(sumElements > 0) {
            elementsData = {
                elements: elementsArray.join(""),
                position: {
                    x: x,
                    y: 0,
                    z: z
                }
            }
            trackElements.push(elementsData);
        }
        
    });

    //need to reverse the order of the track energy array
    trackEnergy = trackEnergy.reverse();

    //TODO implement thresholds

    var luaScriptState = {
        bonusEnergy:[],
        thresholds:[],
        trackElements: trackElements,
        trackEnergy: trackEnergy
    }

    var luaScriptStateString = JSON.stringify(luaScriptState);

    //TODO energy elements and snap points
    var spiritTile = {
        GUID: spiritNameStandardized,
        Name: "Custom_Tile",
        Transform: {
            posX: 57.98,
            posY: 1.22376359,
            posZ: 73.1,
            rotX: 6.282819E-05,
            rotY: 180.0,
            rotZ: 179.999786,
            scaleX: 5.46,
            scaleY: 1.0,
            scaleZ: 5.46
        },
        Nickname: spiritName,
        Description: "Custom",
        GMNotes: "",
        AltLookAngle: {
            x: 0.0,
            y: 0.0,
            z: 0.0
        },
        ColorDiffuse: {
            r: 0.200299948,
            g: 0.160299957,
            b: 0.151799977
        },
        Tags: [
            "Custom",
            "Spirit",
            complexity
        ],
        LayoutGroupSortIndex: 0,
        Value: 0,
        Locked: false,
        Grid: true,
        Snap: true,
        IgnoreFoW: false,
        MeasureMovement: false,
        DragSelectable: true,
        Autoraise: true,
        Sticky: true,
        Tooltip: true,
        GridProjection: false,
        HideWhenFaceDown: false,
        Hands: false,
        CustomImage: {
            ImageURL: spiritBoardFrontImgUrl,
            ImageSecondaryURL: spiritBoardBackImgUrl,
            ImageScalar: 1,
            WidthScale: 0,
            CustomTile: {
                Type: 0,
                Thickness: 0.2,
                Stackable: false,
                Stretch: true
            }
        },
        LuaScript: "-- Spirit Panel for MJ & iakona's Spirit Island Mod --\nuseProgression = false\nuseAspect = 2\n\nfunction onLoad(saved_data)\n    Color.Add(\"SoftBlue\", Color.new(0.53,0.92,1))\n    Color.Add(\"SoftYellow\", Color.new(1,0.8,0.5))\n    getObjectFromGUID(\"SourceSpirit\").call(\"load\", {obj = self, saved_data = saved_data})\nend",
        LuaScriptState: luaScriptStateString,
        XmlUI: "",
        AttachedSnapPoints: attachedSnapPoints
    }

    containedObjects.push(spiritTile);

    var childObjects = [
        {
            GUID: spiritNameStandardized,
            Name: "Custom_Tile",
            Transform: {
                posX: 0.0,
                posY: 0.2,
                posZ: 0.0,
                rotX: 0.0,
                rotY: 0.0,
                rotZ: 180.0,
                scaleX: 1.0,
                scaleY: 1.0,
                scaleZ: 1.0
            },
            Nickname: spiritName,
            Description: "",
            GMNotes: "",
            AltLookAngle: {
                x: 0.0,
                y: 0.0,
                z: 0.0
            },
            ColorDiffuse: {
                r: 1.0,
                g: 1.0,
                b: 1.0
            },
            LayoutGroupSortIndex: 0,
            Value: 0,
            Locked: false,
            Grid: false,
            Snap: false,
            IgnoreFoW: false,
            MeasureMovement: false,
            DragSelectable: true,
            Autoraise: true,
            Sticky: false,
            Tooltip: true,
            GridProjection: false,
            HideWhenFaceDown: false,
            Hands: false,
            CustomImage: {
                ImageURL: spiritBoardFrontImgUrl,
                ImageSecondaryURL: spiritBoardBackImgUrl,
                ImageScalar: 1,
                WidthScale: 0,
                CustomTile: {
                    Type: 0,
                    Thickness: 0.2,
                    Stackable: false,
                    Stretch: true
                }
            },
            LuaScript: "",
            LuaScriptState: "",
            XmlUI: "",
            AttachedSnapPoints: attachedSnapPoints
        }
    ]

    //TTS json generation

    var TTSobj = {
        SaveName: "",
        Date: "",
        VersionNumber: "",
        GameMode: "",
        GameType: "",
        GameComplexity: "",
        Tags: [],
        Gravity: 0.5,
        PlayArea: 0.5,
        Table: "",
        Sky: "",
        Note: "",
        TabStates: {},
        LuaScript: "",
        LuaScriptState: "",
        XmlUI: "",
        ObjectStates: [
            {
                GUID: spiritNameStandardized,
                Name: "Custom Model Bag",
                Transform: {
                    posX: 55.4,
                    posY: 0.8031,
                    posZ: 72.53,
                    rotX: 0.0,
                    rotY: 180.0,
                    rotZ: 0.0,
                    scaleX: 5.46,
                    scaleY: 1.0,
                    scaleZ: 5.46
                },
                Nickname: spiritName,
                Description: "Spirit Created with Spirit Island Tabletop Simulator Generator",
                GMNotes: "",
                AltLookAngle: {
                    x: 0.0,
                    y: 0.0,
                    z: 0.0
                },
                ColorDiffuse: {
                    r: 0.568599939,
                    g: 0.5608,
                    b: 0.5608,
                    a: 0.0
                },
                Tags: [
                    "Custom",
                    "Spirit",
                    complexity
                ],
                LayoutGroupSortIndex: 0,
                Value: 0,
                Locked: true,
                Grid: false,
                Snap: false,
                IgnoreFoW: false,
                MeasureMovement: false,
                DragSelectable: true,
                Autoraise: true,
                Sticky: true,
                Tooltip: true,
                GridProjection: false,
                HideWhenFaceDown: false,
                Hands: false,
                MaterialIndex: -1,
                MeshIndex: -1,
                CustomMesh: {
                    MeshURL: "http://cloud-3.steamusercontent.com/ugc/1847038070178749845/F9B69FD810B4A07F92D525124179BDDABADB884E/",
                    DiffuseURL: "",
                    NormalURL: "",
                    ColliderURL: "",
                    Convex: true,
                    MaterialIndex: 3,
                    TypeIndex: 6,
                    CustomShader: {
                        SpecularColor: {
                            r: 1.0,
                            g: 1.0,
                            b: 1.0
                        },
                        SpecularIntensity: 0.0,
                        SpecularSharpness: 2.0,
                        FresnelStrength: 0.0
                    },
                    CastShadows: true
                },
                Bag: {
                    Order: 0
                },
                LuaScript: "-- Spirit Panel for MJ & iakona's Spirit Island Mod --\nuseProgression = false\nuseAspect = 2\n\nfunction onLoad(saved_data)\n    Color.Add(\"SoftBlue\", Color.new(0.53,0.92,1))\n    Color.Add(\"SoftYellow\", Color.new(1,0.8,0.5))\n    getObjectFromGUID(\"SourceSpirit\").call(\"load\", {obj = self, saved_data = saved_data})\nend",
                LuaScriptState: "",
                XmlUI: "",
                ContainedObjects: containedObjects,
                ChildObjects: childObjects
            }
        ]
    }

    var json = JSON.stringify(TTSobj, null, 2);

    var blob = new Blob([json], { type: "application/json" });

    var url = URL.createObjectURL(blob);

    var anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = spiritNameStandardized + ".json";

    anchor.click();

    URL.revokeObjectURL(url);
    
}