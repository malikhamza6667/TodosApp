import { useAppTheme } from "@contexts"
import { hp } from "@utils"
import { StyleSheet, useWindowDimensions } from "react-native"

export const useStyles=()=>{
const {colors}=useAppTheme()
const {fontScale}=useWindowDimensions()
    const styles=({selected}: {selected?:boolean})=>StyleSheet.create({

        optionView:{
            backgroundColor: selected ? colors.success: colors.borderColor,
            paddingHorizontal: hp(2),
            paddingVertical: hp(1),
            marginHorizontal:hp(0.5),
            borderRadius: hp(5)
        },
        option:{
fontFamily: "Poppins-Bold",
fontSize: 12/fontScale,
color: selected? colors.primarybackground: colors.textColor

        },
        container: {
            marginHorizontal: hp(2)
        },
        emptyContainer:{
            
                height: hp(10),
                top:hp(6),
                alignItems:"center", justifyContent:"center",backgroundColor:colors.borderColor
        },
        emptyText:{
            fontFamily: "Poppins-Bold",
fontSize: 16/fontScale,
color:  colors.textColor
        }
    })

    return { styles}
}