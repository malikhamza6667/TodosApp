import {useAppTheme} from '@contexts';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {hp, wp} from '@utils';
export const useStyles=()=>{

const {colors}=useAppTheme()
const {fontScale}=useWindowDimensions()
const ICONSIZE= hp(4)
const ICONCOLOR= colors.primaryForeground
    const styles= StyleSheet.create({

        title:{
            fontFamily: "Poppins-SemiBold",
            color: colors.textColor,
            fontSize:18/fontScale
        },
        crossText:{
            color: colors.textColor,
            fontSize:20/fontScale
        },
        headerView:{
            flex:0.15,
            flexDirection:"row",
            justifyContent:"space-between",
            marginHorizontal: wp(3),
            top:hp(1),
            alignItems:"center"
        },
        bodyView:{
            flex:0.85,
        },
        roundedView:{
            paddingHorizontal: hp(2),
            paddingVertical: hp(1.4),
            borderRadius:hp(5),
            backgroundColor: colors.primaryForeground
        },
        buttonView:{
            top:hp(3)
        }
    })

    return { styles,ICONSIZE, ICONCOLOR}
}