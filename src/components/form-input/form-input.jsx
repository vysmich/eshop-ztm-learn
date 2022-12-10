import React from "react";
//styles
import { FormInputLabel, Input, Group } from "./form-input-style";

export default function FormInput({ label, inputOptions }) {
    return (
        <Group>
            <Input {...inputOptions} />
            {label ? <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel> : null}
        </Group>
    );
}
