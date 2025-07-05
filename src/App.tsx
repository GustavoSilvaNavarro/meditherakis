import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Router } from '@/router';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
