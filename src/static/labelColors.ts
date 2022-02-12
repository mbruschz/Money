import LabelCicles from './../types/labelCicle'

interface Label {
  [index:string]: LabelCicles,
}

let LabelColor: Label = {};
LabelColor["red"] = { color1: '#ce5d5f', color2: '#c74648', color3: '#c02f31', color4: '#ba181b', };
LabelColor["green"] = { color1: '#b0dc4c', color2: '#a5d732', color3: '#9ad219', color4: '#8fce00', };
LabelColor["blue"] = { color1: '#81e8f6', color2: '#76deef', color3: '#055194', color4: '#062745', };

export default LabelColor;