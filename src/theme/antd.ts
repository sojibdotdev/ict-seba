import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#10BBFA",
    borderRadius: 3,
    fontFamily: "var(--font-hindSiliguri)",
  },
  components: {
    Tabs: {
      cardBg: "#10BBFA",
      itemColor: "#fff",
      itemHoverColor: "#fff",
    },
    Collapse: {
      contentBg: "#fff",
      headerBg: "#fff",
    },
  },
};

export { theme };
