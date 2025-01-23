import IconListItem from "@asset/icons/ic-list-item.svg";
import React from "react";

type ItemJobDescriptionProps = {
  children?: React.ReactNode;
};

export default function ItemJobDescription({
  children,
}: ItemJobDescriptionProps) {
  return (
    <div className="flex justify-start space-x-4">
      <div className="size-4">
        <IconListItem />
      </div>
      <p>{children}</p>
    </div>
  );
}
