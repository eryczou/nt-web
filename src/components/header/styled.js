import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const HeaderWrapper = styled.div`
  height: 64px;
`

export const HeaderCenter = styled.div`
  height: 64px;
  max-width: 1236px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  box-sizing: border-box;
  img {
    height: 32px;
    background: #fff;
  }
`

export const ContactUsBtn = styled(Button)`
  && {
    margin-left: 20px;
  }
`;