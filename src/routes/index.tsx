import { NavigationContainer } from "@react-navigation/native"
import { TodoStack } from "./stacks"

export const MainRoutes=()=>{


    return(
        <NavigationContainer>
<TodoStack/>
        </NavigationContainer>
    )
}