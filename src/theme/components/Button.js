const Button = {
  baseStyle: {
    fontFamily: 'body',
    fontWeight: 'bold',
    borderRadius: 'full',
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '12px 20px',
    ':hover': {
      textDecoration: 'none',
    },
    ':focus': {
      boxShadow: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },
  variants: {
    primary: {
      transition: 'none',
      background: 'pink.500',
      color: 'white',
      ':hover': {
        background: 'pink.600',
        color: 'white',
        textDecoration: 'none',
      },
    },
    outline: {},
    solid: {},
    ghost: {
      bg: 'none',
      color: 'pink.500',
      transition: 'none',
      ':hover': {
        background: 'none',
        color: 'pink.600',
      },
    },
    link: {
      fontWeight: 'black',
      bg: 'none',
      color: 'pink.500',
      transition: 'none',
      '&': {
        padding: 0,
      },
      _hover: {
        background: 'none',
        color: 'pink.600',
        svg: { transform: 'translate(5px, 0)' },
      },
      svg: {
        transition: 'transform .2s',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

export default Button;
