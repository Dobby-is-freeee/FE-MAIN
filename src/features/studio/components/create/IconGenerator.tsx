import { useCallback, useMemo, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import styled, { css } from 'styled-components';

import { Dropdown } from '@/assets/images';
import { COLORS, ICON_INDEX, ICON_SVGS } from '../../constants';
import { IconGeneratorType } from '../../containers/StudioCreateFormContainer';
import { Field, Label, RequiredIcon } from './CreateForm';

interface OpenButtonStyleProps {
  isOpen: boolean;
}

interface ListItemStyleProps {
  selectedIndex?: number;
}

interface ColorItemStyleProps extends ListItemStyleProps {
  bgColor: string;
}

interface PreviewIconStyleProps {
  bgColor: string;
}

const Wrap = styled.div`
  display: flex;
`;

const InnerField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const FieldName = styled.small`
  color: ${({ theme }) => theme.colors.gray3};
  margin-bottom: 8px;
`;

const IconBlockWrap = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    width: 60px;
    height: 60px;
  }
`;

const ColorBlockWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;

const ColorBlock = styled.div<PreviewIconStyleProps>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;

const Separator = styled.span`
  margin-top: auto;
  height: 48px;
`;

const PreviewField = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

const PreviewIcon = styled.div<PreviewIconStyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 60px;
  height: 60px;

  svg {
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ theme }) => theme.colors.white};
    width: 60px;
    height: 60px;
  }

  &::after {
    position: absolute;
    left: -40px;
    content: '';
    border: 1px solid ${({ theme }) => theme.colors.gray1};
    height: 48px;
  }
`;

const OpenButton = styled.button<OpenButtonStyleProps>`
  background-color: transparent;
  margin-left: 4px;
  width: 28px;
  height: 28px;

  svg {
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  }
`;

const OpenedSelectList = styled.div`
  position: absolute;
  top: 88px;
`;

const SelectListItemWrap = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 40px);
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(29, 29, 29, 0.08);
  border-radius: 4px;
  z-index: 10;
`;

const ListItem = styled.button<ListItemStyleProps>`
  background-color: transparent;
  border: 1px solid transparent;
  display: flex;
  align-items: center;

  ${({ selectedIndex, theme }) => {
    if (typeof selectedIndex === 'undefined') {
      return;
    }

    const index: number = selectedIndex + 1;

    if (index === 1) {
      return css`
        &:first-child {
          border: 1px solid ${theme.colors.gray2};
          box-shadow: 0px 4px 8px rgba(29, 29, 29, 0.08);
          border-radius: 4px;
        }
      `;
    }

    return css`
      &:nth-of-type(${index}) {
        border: 1px solid ${theme.colors.gray2};
        box-shadow: 0px 4px 8px rgba(29, 29, 29, 0.08);
        border-radius: 4px;
      }
    `;
  }}
`;

const ColorItem = styled.button<ColorItemStyleProps>`
  background-color: ${({ bgColor }) => bgColor};
  width: 36px;
  height: 36px;
  border-radius: 50%;

  ${({ selectedIndex, theme }) => {
    if (typeof selectedIndex === 'undefined') {
      return;
    }

    const index = selectedIndex + 1;

    if (index === 1) {
      return css`
        &:first-child {
          border: 2px solid ${theme.colors.gray2};
        }
      `;
    }

    return css`
      &:nth-of-type(${index}) {
        border: 2px solid ${theme.colors.gray2};
      }
    `;
  }}
`;

interface IconGeneratorProps {
  onGeneratorTypeClick: (type: IconGeneratorType | null) => void;
  iconGeneratorType: IconGeneratorType | null;
}

export const IconGenerator = ({ onGeneratorTypeClick, iconGeneratorType }: IconGeneratorProps) => {
  const isIcon = iconGeneratorType === 'icon';
  const isColor = iconGeneratorType === 'color';

  const refColorGenerator = useRef(null);
  const refIconGenerator = useRef(null);

  const [iconIndex, setIconIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const renderIcon = useCallback((index: number) => {
    const IconComponent = ICON_SVGS[index];
    return <IconComponent />;
  }, []);
  const renderColor = useCallback((index: number) => COLORS[index], []);

  const handleSelectOptionCurried = (index: number, type: IconGeneratorType) => () => {
    if (type === 'icon') {
      return setIconIndex(index);
    }

    if (type === 'color') {
      return setColorIndex(index);
    }
  };

  const handleGeneratorTypeClickCurried = (type: IconGeneratorType | null) => () => {
    if (type === 'icon' && isIcon) {
      return onGeneratorTypeClick(null);
    }

    if (type === 'color' && isColor) {
      return onGeneratorTypeClick(null);
    }

    onGeneratorTypeClick(type);
  };

  const handleColorAway = () => {
    if (!isColor) {
      return;
    }
    onGeneratorTypeClick(null);
  };

  const handleIconAway = () => {
    if (!isIcon) {
      return;
    }
    onGeneratorTypeClick(null);
  };

  const renderIconItems = useMemo(() => {
    return Array.from({ length: ICON_INDEX }).map((_, index) => (
      <ListItem key={index} selectedIndex={iconIndex} onClick={handleSelectOptionCurried(index, 'icon')}>
        {renderIcon(index)}
      </ListItem>
    ));
  }, [renderIcon, iconIndex]);

  const renderColorItems = useMemo(() => {
    return COLORS.map((color, index) => (
      <ColorItem
        bgColor={color}
        key={color}
        onClick={handleSelectOptionCurried(index, 'color')}
        selectedIndex={colorIndex}>
        <div />
      </ColorItem>
    ));
  }, [colorIndex]);

  useClickAway(refColorGenerator, handleColorAway);
  useClickAway(refIconGenerator, handleIconAway);

  return (
    <Field>
      <Label htmlFor="icon">
        아이콘
        <RequiredIcon>*</RequiredIcon>
      </Label>
      <Wrap>
        <InnerField>
          <FieldName>Icon</FieldName>
          <IconBlockWrap ref={refIconGenerator}>
            {renderIcon(iconIndex)}
            <OpenButton type="button" onClick={handleGeneratorTypeClickCurried('icon')} isOpen={isIcon}>
              <Dropdown />
            </OpenButton>
            {isIcon && (
              <OpenedSelectList>
                <SelectListItemWrap>{renderIconItems}</SelectListItemWrap>
              </OpenedSelectList>
            )}
          </IconBlockWrap>
        </InnerField>

        <InnerField>
          <FieldName>Color</FieldName>

          <ColorBlockWrap ref={refColorGenerator}>
            <ColorBlock bgColor={renderColor(colorIndex)} />

            <OpenButton type="button" onClick={handleGeneratorTypeClickCurried('color')} isOpen={isColor}>
              <Dropdown />
            </OpenButton>
            {isColor && (
              <OpenedSelectList>
                <SelectListItemWrap>{renderColorItems}</SelectListItemWrap>
              </OpenedSelectList>
            )}
          </ColorBlockWrap>
        </InnerField>

        <Separator />

        <PreviewField>
          <FieldName>Preview</FieldName>
          <PreviewIcon bgColor={renderColor(colorIndex)}>{renderIcon(iconIndex)}</PreviewIcon>
        </PreviewField>
      </Wrap>
    </Field>
  );
};
