import {COLORSTYPE} from '@assets'
import React from 'react'
export type ThemeContextTypes={

    isDarkMode: boolean,
    colors: COLORSTYPE
}

export type ThemeProviderTypes={
children: React.ReactNode
}