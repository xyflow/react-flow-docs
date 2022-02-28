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
        background: 'black',
        color: 'white',
        textDecoration: 'none',
      },
    },
    outline: {},
    solid: {},
    ghost: {
      bg: 'none',
      color: 'primary',
      transition: 'none',
      ':hover': {
        background: 'none',
        color: 'black',
      },
    },
    link: {
      fontWeight: 'black',
      bg: 'none',
      color: 'primary',
      transition: 'none',
      '&': {
        padding: 0,
      },
      _hover: {
        background: 'none',
        color: 'black',
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
