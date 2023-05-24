import styled from "styled-components";

export const SSlot = styled.section<{ prefix: string }>`
  display: grid;
  position: relative;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";

  background-color: white;
  border: 1px solid #e0e2e7;
  box-shadow: 0px 1.5px 2px rgba(16, 24, 40, 0.1);
  border-radius: 8px;
  padding: 24px 0;
  padding-bottom: 0;
  color: #1a1c21;

  ${({ prefix }) => `
    .${prefix}__header {
      grid-area: header;
      padding: 0 24px;
      margin-bottom: 14px;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.005em;
    }

    .${prefix}__content {
      grid-area: content;
      padding: 0 24px;
      padding-bottom: 24px;
    }

    .${prefix}__footer {
      grid-area: footer;
      border-top: 1px solid #e0e2e7;
      padding: 24px;
    }

    .${prefix}__handle {
      position: absolute;
      top: 18px;
      right: 24px;
      z-index: 1;
    }
  `}
`;
