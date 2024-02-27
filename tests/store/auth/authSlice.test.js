import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";



describe('Pruebas en el authSlice', () => {

    test('Debe de regresar el estado inicial y llamarse auth', () => {
                 
        const state = authSlice.reducer(initialState, {});
        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);        

    });

    test('Debe de realizar la autenticación', () => {

        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: 'authenticated',  // 'checking', 'authenticateed'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });

    })

    test('Debe de realizar el logout sin argumentos', () => { 
    
        const state = authSlice.reducer(authenticatedState, logout());

        expect(state).toEqual({
            status: 'not-authenticated',  // 'checking', 'authenticateed'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });
        
    });

    test('Debe de realizar el logout y mostrar un mensaje de error', () => { 
        
        // const mensaje = {errorMessage: 'Credenciales no son correctas'};
        const state = authSlice.reducer(notAuthenticatedState, logout({errorMessage: 'Credenciales no son correctas'}));

        console.log(state);

        expect(state).toEqual(
            {
                status: 'not-authenticated',
                uid: null,
                email: null,
                displayName: null,
                photoURL: null,
                errorMessage: 'Credenciales no son correctas'
            }
        )

    });


    test('Debe de cambiar el estado a checking', () => {

        const state = authSlice.reducer(authenticatedState, checkingCredentials());

        expect(state.status).toBe('checking');

    })

})