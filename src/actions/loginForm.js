export const updateLoginFrom = formData => {
    return {
        type: "UPDATE_LOGIN_FORM",
        action: formData
    }
}