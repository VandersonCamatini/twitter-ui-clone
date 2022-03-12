import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email  } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  background: var(--primary);
  z-index: 2;

  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--outline);
  padding: 8px 0px 9px 13px;

  > button {
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  height: 24px;
  width: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const ProfilePage = styled.div`
  flex: 1;
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconsCss = css`
  height: 31px;
  width: 31px;

  cursor: pointer;
  fill: var(--gray);

  &:hover, &.active {
    fill: var(--twitter);
  }
`

export const HomeIcon = styled(Home)`
  ${iconsCss}
`
export const SearchIcon = styled(Search)`
  ${iconsCss}
`
export const BellIcon = styled(Notifications)`
  ${iconsCss}
`
export const EmailIcon = styled(Email)`
  ${iconsCss}
`