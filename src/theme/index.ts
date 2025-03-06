import { createTheme } from "@lemaks/grid_system"

const userColors =   {        
    "glass-dark": "#4b4b4b88",
    "glass": "#8a8a8a88",
    "glass-light": "#abababaa"
}


export const userGridConfig = {    
    "grid-columns-number": "52",    
    colors: userColors
};

export const {$color, $breakPoint, $uw, $cssTRBL, $variable, colors, css} = createTheme(userGridConfig);