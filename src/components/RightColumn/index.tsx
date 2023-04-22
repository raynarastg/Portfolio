import { styled } from "@/stitches.config";

const StyledSection = styled("section", {
  display: "inline-flex",
  flex: 1,
  '@mobile': {
    paddingBottom: 10
  }
});

export const RightColumn = StyledSection;
