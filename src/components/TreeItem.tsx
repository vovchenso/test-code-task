import React from "react";
import styled from "styled-components";

import { Button, Spinner } from "src/components"

const ItemWrapper = styled.div`
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 20px rgba(162, 176, 202, 0.28);
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
`;

const Name = styled.h3`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
`;
Name.displayName = "test-Name";

const SpeciesName = styled.p<ITheme>`
    color: ${props => props.theme.colors.sub};
    margin-bottom: 20px;
`;
SpeciesName.displayName = "test-SpeciesName";

const ImageWrapper = styled.div`
    margin-bottom: 20px;
`;

const Img = styled.img`
    width: 300px;
`;
Img.displayName = "test-Img";

interface ITreeItemProps {
    tree: ITree;
}

const TreeItem: React.FC<ITreeItemProps> = ({ tree }) => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [showImage, setShowImage] = React.useState<boolean>(false);

    const loadImage = React.useCallback(() => {
        setLoading(true);
        setShowImage(true);

        const img = new Image();
        img.onload = () => {
            setLoading(false);
        };
        img.src = tree.image;
    }, [tree]);

    const toggleImage = React.useCallback(() => {
        if (showImage) {
            setShowImage(false);
            setLoading(false);
        } else {
            loadImage();
        }
    }, [showImage]);

    return (
        <ItemWrapper>
            <Name>{tree.name}</Name>
            <SpeciesName>{tree.species_name}</SpeciesName>
            {showImage && (
                <ImageWrapper>
                    {loading && (
                        <Spinner />
                    )}
                    {loading || (
                        <Img src={tree.image} />
                    )}
                </ImageWrapper>
            )}
            <Button onClick={toggleImage}>
                {showImage ? "Hide image" : "Show image"}
            </Button>
        </ItemWrapper>
    );
}

export default TreeItem;
