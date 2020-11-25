import React from "react";
import styled from "styled-components";

const Wrapper = styled.div<ITheme>`
    display: flex;
    justify-content: center;
    height: 100%;
    min-width: 300px;
    color: ${props => props.theme.colors.text};
`;

const Column = styled.div`
    & + & {
        margin-left: 20px;
    }
`;

// type ReactNodeGroups = Array<React.ReactNode[]>;

interface IGroup {
    key: string;
    nodes: React.ReactNode[];
}

interface IGridLayoutProps {
    columns?: number;
}

const GridLayout: React.FC<IGridLayoutProps> = ({ columns = 2, children }) => {
    const groups: IGroup[] = React.useMemo(() => {
        const columnsArray = Array.from(Array(columns).keys());
        const emptyGroups: IGroup[] = columnsArray.map(index => ({
            key: `${index}-${Date.now()}`,
            nodes: []
        }));

        const childrenArray = React.Children.toArray(children);
        return childrenArray.reduce((tmp, item, index) => {
            const column = index % columns;
            tmp[column].nodes.push(item);
            return tmp;
        }, emptyGroups) as IGroup[];
    }, [children, columns]);

    return (
        <Wrapper>
            {groups.map(group => (
                <Column key={group.key}>
                    {group.nodes.map(item => item)}
                </Column>
            ))}
        </Wrapper>
    );
}

export default GridLayout;
