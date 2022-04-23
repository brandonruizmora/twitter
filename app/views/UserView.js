class UserView {
    static createUser(payload) {
        if (payload === null) {
            return {
                error: 'payload no existe'
            }
        } else if (typeof payload.id !== 'number' || typeof payload.username !== 'string' || typeof payload.name !== 'string') {
            return {
                error: 'necesitan tener un valor válido'
            }
        } else {
            return {
                success: 'Usuario creado satisfactoriamente'
            }
        }
    }
}

module.exports = UserView;