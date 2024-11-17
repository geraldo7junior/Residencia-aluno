const size = {
    sm: '766px',
    md: '1366px',
    bg: '1920px'
}

const breakpoints = {
    sm: `(max-width: ${size.sm})`,
    md: `(min-width: ${size.sm}) and (max-width: ${size.md})`,
    bg: `(min-width: ${size.md})`
}

export { breakpoints }