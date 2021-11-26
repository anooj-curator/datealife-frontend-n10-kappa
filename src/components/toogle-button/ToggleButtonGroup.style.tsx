import styled from "styled-components";
import MUIToggleButton from "@mui/material/ToggleButton";
import MUIToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ToggleButtonGroupProps } from "./ToggleButtonGroup";
import { ThemeProps } from "styled-components";
import Theme from "../../theme";

const StyledToggleButton = styled(({ addSpacing, curved, ...props }) => <MUIToggleButton {...props} />)`
    && {
        padding: 10px;
        border-radius: ${({ curved }: ToggleButtonGroupProps) => (curved ? 12 : 0)}px;
    }
    &&.Mui-selected {
        background-color: ${({ theme }: ThemeProps<typeof Theme>) => theme.palette.warning.main};
        color: white;
    }

    &&.Mui-selected:hover {
        background-color: ${({ theme }: ThemeProps<typeof Theme>) => theme.palette.warning.dark};
        color: white;
    }
`;

const StyledToggleButtonGroup = styled(({ addSpacing, curved, ...props }) => <MUIToggleButtonGroup {...props} />)`
    && {
        margin: ${({ addSpacing }: any) => (addSpacing ? 8 : 0)}px;
        border-radius: ${({ curved }: ToggleButtonGroupProps) => (curved ? 12 : 0)}px;
    }
`;

export { StyledToggleButton, StyledToggleButtonGroup };
