import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import React from "react";

// Define a type for the items prop
interface NavCollapseProps {
  items: CollapseProps["items"];
}

export const NavCollapse: React.FC<NavCollapseProps> = ({ items }) => {
  return (
    <Collapse
      accordion
      bordered={false}
      expandIconPosition="end"
      items={items}
    />
  );
};
