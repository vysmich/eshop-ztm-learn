import { FC } from "react";
import { DirectoryCategory } from "../directory/directory";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item-style";

type DirectoryItemProps = {
    category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
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
