export default function searchInObject(object, text, fields) {
    let found = false

    if (!!text) {
        function escapeRegExp(string) {
            return string?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        }

        const array = fields ?? Object?.keys(object)

        array?.forEach((key) => {
            if (new RegExp(escapeRegExp(text), 'ig')?.test(object?.[key])) {
                found = true
            }
        })
    }

    return found
}