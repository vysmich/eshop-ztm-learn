import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item-style";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
