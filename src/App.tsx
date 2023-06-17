import { Links } from "./routes";
import Store  from './context';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
    return (
         // @ts-ignore
        <QueryClientProvider client={queryClient}>
            <Store >
                <Links/>
            </Store>
        </QueryClientProvider>
    )
}

export default App;
