import { styled } from '@/stitches.config';

const StyledEmojiIcon = styled('span', {
  fontSize: 24,
  lineHeight: '30px',
  verticalAlign: 'middle',
  variants: {
    margin: {
      left: { marginLeft: 8 },
      right: { marginRight: 8 }
    }
  }
})

export const EmojiIcon = StyledEmojiIcon;