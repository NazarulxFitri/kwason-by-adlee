import { SvgIcon } from "@mui/material";

interface MinusIconProps {
  color?: string;
  size?: string;
}

const MinusIcon: React.FC<MinusIconProps> = ({ color, size }) => {
  return (
    <SvgIcon
      viewBox="0 0 448 512"
      sx={{ fontSize: `${size}`, verticalAlign: "bottom", display: "block"}}
    >
      <path
        fill={color}
        d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
      />
    </SvgIcon>
  );
};

export default MinusIcon;