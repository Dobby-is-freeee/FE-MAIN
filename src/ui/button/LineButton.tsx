import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '@common/theme';

type ButtonVariantType = 'link' | 'default';
type ButtonColorType = 'bg' | 'color' | 'border';
type ButtonColorByVariant = keyof typeof theme.colors;

interface ButtonColorsByVariant
  extends Record<ButtonColorType, ButtonColorByVariant> {}

const BUTTON_COLORS_BY_VARIANT_DIC: Record<
  ButtonVariantType,
  ButtonColorsByVariant
> = {
  default: { bg: 'white', color: 'black', border: 'gray2' },
  link: { bg: 'white', color: 'black', border: 'gray2' },
};

interface ButtonStyleProps {
  variant: ButtonVariantType;
}

function getColor(variant: ButtonVariantType): ButtonColorsByVariant {
  return BUTTON_COLORS_BY_VARIANT_DIC[variant];
}

const Button = styled.button<ButtonStyleProps>`
  background-color: ${({ theme, variant }) =>
    theme.colors[getColor(variant).bg]};
  color: ${({ theme, variant }) => theme.colors[getColor(variant).color]};
  outline: none;
  border: 1px solid
    ${({ theme, variant }) => theme.colors[getColor(variant).border]};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: 500;
  width: 100%;
  height: 38px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.0025em;
  transition: background-color 300ms linear;

  &:hover {
    background-color: rgba(205, 204, 208, 0.25);
  }

  &:active {
    background-color: rgba(205, 204, 208, 0.55);
  }

  &:disabled {
    pointer-events: none;
    color: ${({ theme }) => theme.colors.gray2};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const LinkButton = Button.withComponent(Link);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleProps {
  children?: React.ReactNode;
  variant: ButtonVariantType;
  to?: string;
}

export const LineButton = ({
  children,
  variant = 'default',
  to = '#',
  ...props
}: Partial<ButtonProps>) => {
  if (variant === 'link') {
    return (
      <LinkButton to={to} variant={variant}>
        {children}
      </LinkButton>
    );
  }

  return (
    <Button {...props} variant={variant}>
      {children}
    </Button>
  );
};
