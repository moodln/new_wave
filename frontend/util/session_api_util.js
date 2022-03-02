export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const edit = (user, formData) => {
    
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        contentType: false,
        processData: false,
        dataType: 'json',
        data: formData
    })
}

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);