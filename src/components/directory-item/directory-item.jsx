import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item-style";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    return (
        <DirectoryItemContainer to={route}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
