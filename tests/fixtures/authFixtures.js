

export const initialState = {
    status: 'checking',  // 'checking', 'authenticateed'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated',  // 'checking', 'authenticateed'
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'not-authenticated',  // 'checking', 'authenticateed'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: 'ABC123',
    email: 'demo@google.com',
    photoURL: 'https://demo.jpg'
}