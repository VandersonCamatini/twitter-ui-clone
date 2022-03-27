import styled, { css } from "styled-components"
import { Retweet, Chat, Favorite, IosShare } from '../../styles/icons';

const IconCss = css`
  width: 19px;
  height: 19px;
`

export const CommentIcon = styled(Chat)`
  ${IconCss}
`;

export const RetweetIcon = styled(Retweet)`
  ${IconCss}
`;

export const LikeIcon = styled(Favorite)`
  ${IconCss}
`;

export const ShareIcon = styled(IosShare)`
  ${IconCss}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outlined);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray);
`;

export const RetweetedIcon = styled(RetweetIcon)`
  width: 16px;
  height: 16px;
  margin-right: 9px;
  margin-left: 35px;
  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 2px;

  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  background: var(--gray);
  flex-shrink: 0;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

  strong {
    margin-right: 5px;
  }

  span, time {
    color: var(--gray);
  }

  strong, span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  margin: 0 10px;
  background-color: var(--gray);
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: var(--outline);
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 11px auto 0;
  width: 100%; // Mobile

  @media (min-width: 321px) {
    width: 75%;
  }

  div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  svg {
    margin-right: 5px;
  }

  &:nth-child(1){
    color: 
    svg {
      fill: var(--gray);
    }
  }

  &:nth-child(2){
    color: var(--retweet);

    svg > path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3){
    color: var(--like);
    
    svg {
      fill: var(--like);
    }
  }

  &:nth-child(4){
    svg {
      fill: var(--twitter);
    }
  }
`;

