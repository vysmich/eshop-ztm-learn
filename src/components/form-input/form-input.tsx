import { InputHTMLAttributes, FC } from "react";
//styles
import { FormInputLabel, Input, Group } from "./form-input-style";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel
                    shrink={Boolean(
                        otherProps.value && typeof otherProps.value == "string" && otherProps.value.length
                    )}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};
