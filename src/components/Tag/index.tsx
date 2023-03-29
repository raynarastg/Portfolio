import { styled } from "@/stitches.config";

const StyledTag = styled("span", {
  backgroundColor: "$petroleo",
  borderRadius: 9999,
  color: "$branco",
  fontSize: 12,
  lineHeight: "15px",
  variants: {
    color: {
      amarelo: {
        backgroundColor: "$amarelo",
      },
      azul: {
        backgroundColor: "$azul",
      },
      coral: {
        backgroundColor: "$coral",
      },
      roxo: {
        backgroundColor: "$roxo",
      },
      verde: {
        backgroundColor: "$verde",
      },
    },
  },
  px: 12,
  py: 4,
});

export const Tag = StyledTag;
