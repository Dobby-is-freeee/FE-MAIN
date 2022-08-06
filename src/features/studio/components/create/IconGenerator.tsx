import { Dropdown, Icon01 } from '@/assets/images';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import styled from 'styled-components';
import { IconGeneratorType } from '../../containers/StudioCreateFormContainer';
import { Field, Label, RequiredIcon } from './CreateForm';

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

const ColorBlock = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: red;
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

interface PreviewIconStyleProps {
  bgColor: string;
}

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

const OpenButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin-left: 4px;
  width: 28px;
  height: 28px;
`;

const OpenedSelectList = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  bottom: 0;
`;

interface IconGeneratorProps {
  onGeneratorTypeClick: (type: IconGeneratorType | null) => void;
  iconGeneratorType: IconGeneratorType | null;
}

export const IconGenerator = ({ onGeneratorTypeClick, iconGeneratorType }: IconGeneratorProps) => {
  const isIcon = iconGeneratorType === 'icon';
  const isColor = iconGeneratorType === 'color';

  const refGenerator = useRef(null);

  const handleGeneratorTypeClickCurried = (type: IconGeneratorType | null) => () => {
    onGeneratorTypeClick(type);
  };

  const handleAway = () => {
    onGeneratorTypeClick(null);
  };

  useClickAway(refGenerator, handleAway);

  return (
    <Field>
      <Label htmlFor="icon">
        아이콘
        <RequiredIcon>*</RequiredIcon>
      </Label>
      <Wrap>
        <InnerField>
          <FieldName>Icon</FieldName>
          <IconBlockWrap>
            <Icon01 />
            <OpenButton type="button" onClick={handleGeneratorTypeClickCurried('icon')}>
              <Dropdown />
            </OpenButton>

            {isIcon && <OpenedSelectList ref={refGenerator}>g2</OpenedSelectList>}
          </IconBlockWrap>
        </InnerField>

        <InnerField>
          <FieldName>Color</FieldName>

          <ColorBlockWrap>
            <ColorBlock />

            <OpenButton type="button" onClick={handleGeneratorTypeClickCurried('color')}>
              <Dropdown />
            </OpenButton>
          </ColorBlockWrap>

          {isColor && <OpenedSelectList ref={refGenerator}>컬러욤</OpenedSelectList>}
        </InnerField>

        <Separator />

        <PreviewField>
          <FieldName>Preview</FieldName>
          <PreviewIcon bgColor="#677BF9">
            <Icon01 />
          </PreviewIcon>
        </PreviewField>
      </Wrap>
    </Field>
  );
};
