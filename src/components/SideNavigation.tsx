import { Fragment, ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { LogoLarge, MyProfileBlack, ProjectBlack, SettingBlack } from '@/assets/images';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.colors.gray1};
  width: 234px;
  min-height: 100vh;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;
const LogoWrap = styled.div`
  width: 234px;
  height: 80px;
  margin: 0 0 60px 0;

  img {
    width: 100%;
    height: 100%;
  }
`;
const MenuItemWrap = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const MenuItemList = styled.li<{ isActiveMenu: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 300ms;
  padding-left: 27px;
  height: 56px;

  ${({ isActiveMenu }) =>
    isActiveMenu &&
    css`
      background-color: rgba(78, 53, 231, 0.1);
      color: ${({ theme }) => theme.colors.primary};

      path {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}

  &:hover {
    background-color: #f6f5fe;
  }
`;
const MenuItemText = styled.span`
  padding-left: 9px;
`;
const SubMenuItemWrap = styled.ul``;
const SubMenuItemList = styled.li<{ isActiveMenu: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 18px 36px;

  ${({ isActiveMenu }) =>
    isActiveMenu &&
    css`
      background-color: rgba(78, 53, 231, 0.1);
    `}

  &:hover {
    background-color: rgba(78, 53, 231, 0.1);
  }
`;
const SettingLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  padding-left: 27px;
  height: 56px;
  margin-bottom: 80px;
`;

interface MenuItem {
  value: string | ReactNode;
  path: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    value: (
      <>
        <ProjectBlack />
        <MenuItemText>내 프로젝트</MenuItemText>
      </>
    ),
    path: '/studio',
  },
  {
    value: (
      <>
        <MyProfileBlack />
        <MenuItemText>내 프로필</MenuItemText>
      </>
    ),
    path: '/profile',
  },
];

const hasSubMenu = (subMenu?: MenuItem[]) => Boolean(subMenu?.length);

export const SideNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [menuPaths, setMenuPaths] = useState<string[]>([pathname]);

  const isActiveMenu = (path: string) => pathname === path;

  const handleMoveClickCurried = (path: string, hasChildren?: boolean) => () => {
    if (hasChildren) {
      setMenuPaths((prev) => {
        if (prev.includes(path)) {
          return prev.filter((prevPath) => prevPath !== path);
        }

        return [...prev, path];
      });
    }

    navigate(path);
  };

  return (
    <Wrap>
      <LogoWrap>
        <LogoLarge />
      </LogoWrap>

      <MenuItemWrap>
        {menuItems.map(({ path, value, children }) => (
          <Fragment key={path}>
            {/* TODO: 분할 - chkim */}
            <MenuItemList
              onClick={handleMoveClickCurried(path, hasSubMenu(children))}
              isActiveMenu={!hasSubMenu(children) && isActiveMenu(path)}>
              {value}
            </MenuItemList>

            {hasSubMenu(children) && (
              <SubMenuItemWrap>
                {children?.map(
                  ({ path, value }) =>
                    menuPaths.includes(path) && (
                      <SubMenuItemList
                        key={path}
                        onClick={handleMoveClickCurried(path)}
                        isActiveMenu={isActiveMenu(path)}>
                        {value}
                      </SubMenuItemList>
                    ),
                )}
              </SubMenuItemWrap>
            )}
          </Fragment>
        ))}
      </MenuItemWrap>

      <SettingLink to="/setting">
        <SettingBlack />
        <MenuItemText>환경설정</MenuItemText>
      </SettingLink>
    </Wrap>
  );
};
