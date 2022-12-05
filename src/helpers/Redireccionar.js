const redireccionar = (rol) => {
    switch (rol) {
        case 1:
            return "/user"
            break;
        case 2:
            return "/distributor"
            break;
        case 3:
            return "/admin"
            break;
        default:
            break;
    }
}

export default redireccionar;