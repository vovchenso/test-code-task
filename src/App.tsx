import React from "react";

import { Center, Spinner, GridLayout } from "src/components";
import {getTrees} from "./services/api/trees";
import TreeItem from "./components/TreeItem";

const App: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [trees, setTrees] = React.useState<ITree[]>([]);

    const loadData = React.useCallback(async () => {
        const response = await getTrees();
        setTrees(response.trees);
    }, []);

    React.useEffect(() => {
        loadData().then(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Center>
                <Spinner />
            </Center>
        );
    }

    return (
        <GridLayout>
            {trees.map(tree => (
                <TreeItem key={tree.name} tree={tree} />
            ))}
        </GridLayout>
    );
}

export default App;
