import { ROUTES } from "@constants"
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack"
import { AddTodo, Home } from "@screens"

const stack= createNativeStackNavigator()
export const TodoStack=()=>{
const screenOptions:NativeStackNavigationOptions={
    headerShown:false,
}

    return(
        <stack.Navigator
        screenOptions={screenOptions}
        >
            <stack.Screen
            name={ROUTES.HOME}
            component={Home}
            />
            <stack.Screen
            name={ROUTES.ADDTODO}
            component={AddTodo}
            />
        </stack.Navigator>
    )
}