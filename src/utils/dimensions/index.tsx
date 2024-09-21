import { Dimensions, useWindowDimensions } from "react-native";

 const {width,height}= Dimensions.get('window')


 const wp = (value: number) => {
    let decimal = value / 100;
    let newWidth = width * decimal;
    return newWidth;
};

const hp = (value: number) => {
    let decimal = value / 100;
    let newHeight = height * decimal;
    return newHeight;
};

export {hp,wp}