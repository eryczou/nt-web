import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const HeaderWrapper = styled.div`
  height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

export const HeaderCenter = styled.div`
  height: 64px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  box-sizing: border-box;
  img {
    height: 40px;
    background: #fff;
  }
`

export const ContactUsBtn = styled(Button)`
  && {
    margin-left: 20px;
    @media (max-width: 600px) {
      margin-left: 5px;
    }
  }
`;