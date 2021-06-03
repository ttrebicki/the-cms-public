const paddingMapper = (padding: string | number) => {
    switch (padding) {
        case '0':
        case 0:
            return '0'

        case '16':
        case 16:
            return '16px'

        case '32':
        case 32:
            return '32px'

        default:
            return '0'
    }
}

const spacingMapper = (spacing: string | number) => {
    switch (spacing) {
        case '0':
        case 0:
            return 0

        case '8':
        case 8:
            return 1

        case '16':
        case 16:
            return 2

        case '32':
        case 32:
            return 4

        case '80':
        case 80:
            return 10

        default:
            return 0
    }
}

export { spacingMapper, paddingMapper };