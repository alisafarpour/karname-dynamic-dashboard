let searchingDelay;
export const handleRequestWithDelay = (request,timeout = 900) => {

    if (searchingDelay) {
        clearTimeout(searchingDelay)
    }

    searchingDelay = setTimeout(() => {
        request()
    }, timeout);
}