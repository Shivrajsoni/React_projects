import { useContext,createContext } from "react";


// making a object of themeContext  in which values and function can be passed 
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=> {}
})

// using the context in the app.js file
export const ThemeProvider=ThemeContext.Provider

// making a customized hook out of it
export default function useTheme(){
    return useContext(ThemeContext)

}