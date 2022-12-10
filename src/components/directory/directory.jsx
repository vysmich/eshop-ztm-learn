//components
import DirectoryItem from "../directory-item/directory-item";
//styles
import { DirectoryContainer } from "./directory-style";

const Directory = ({ categories }) => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
