import { SafeAreaView} from 'react-native';
import {ThemeProvider} from '@contexts';
import { AddTodo, Home } from '@screens';
import { SafeAreaWrapper } from '@layouts';
import { MainRoutes } from '@routes';

const App = () => {


  return (
    <ThemeProvider>
      <SafeAreaWrapper>
<MainRoutes/>
      </SafeAreaWrapper>

    </ThemeProvider>
  );
};

export default App;
