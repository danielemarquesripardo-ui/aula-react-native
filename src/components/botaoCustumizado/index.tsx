import { Button, ButtonProps, TextInput} from "react-native";

export function BotaoCustomizado({  ...rest}: ButtonProps) {
    return (
        <Button
          {...rest}
        />
    )
}
 