import React, { Children, ReactElement, ReactNode, cloneElement } from "react";
import { SSlot } from "./style";

interface SlotProps {
  children: ReactElement | ReactElement[];
  prefix?: string;
}

interface SlotItemProps {
  children: ReactNode;
  prefix?: string;
}

export default function Slot(props: SlotProps) {
  const { children, prefix = "slot" } = props;
  return (
    <SSlot prefix={prefix}>
      {Children.toArray(children).map((c) =>
        cloneElement(c as ReactElement, { prefix }),
      )}
    </SSlot>
  );
}

const SlotHeader = (props: SlotItemProps) => {
  return <div className={`${props.prefix}__header`}>{props.children}</div>;
};

const SlotHandle = (props: SlotItemProps) => {
  return <div className={`${props.prefix}__handle`}>{props.children}</div>;
};

const SlotContent = (props: SlotItemProps) => {
  return <div className={`${props.prefix}__content`}>{props.children}</div>;
};

const SlotFooter = (props: SlotItemProps) => {
  return <div className={`${props.prefix}__footer`}>{props.children}</div>;
};

Slot.Header = SlotHeader;
Slot.Handle = SlotHandle;
Slot.Content = SlotContent;
Slot.Footer = SlotFooter;
