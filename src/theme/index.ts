import { createTheme } from "@lemaks/grid_system"

const userColors =   {        
    "glass-dark": "#4b4b4b88",
    "glass": "#8a8a8a88",
    "glass-light": "#abababaa",
    // Educazione cinofila — verde acqua morbido
    "aqua-light": "#5fd0bf",
    "aqua": "#2f9e8e",
    "aqua-dark": "#1c5f56",
    // Barra superiore — azzurro polvere
    "dust-light": "#c7d4e4",
    "dust": "#aebfd4",
    "dust-dark": "#8fa3bd",    
}


export const userGridConfig = {    
    "grid-columns-number": "52",   
    "max-width": "1200px",
    colors: userColors
};

export const {$color, $breakPoint, $uw, $cssTRBL, $variable, colors, css } = createTheme(userGridConfig);