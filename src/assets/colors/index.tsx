import { COLORSTYPE } from "../types"

const lightModeColors:COLORSTYPE={

    primarybackground:"#f5f5f5",
    secondaryBackground: "#ecf0f1",
    primaryForeground:"#3498db",
    textColor:"#2c3e50",
    buttonColor:"#1abc9c",
     borderColor:"#bdc3c7",
     error:"#e74c3c",
     success:"#2ecc71",


}

const darkModeColors:COLORSTYPE={

    primarybackground:"#2c3e50",
    secondaryBackground: "#34495e",
    primaryForeground:"#2980b9",
    textColor:"#ecf0f1",
    buttonColor:"#16a085",
     borderColor:"#7f8c8d",
     error:"#c0392b",
     success:"#27ae60",

}

export { darkModeColors, lightModeColors }
export type { COLORSTYPE }
