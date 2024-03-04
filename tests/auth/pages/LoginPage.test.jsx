const { render } = require("@testing-library/react")
const { LoginPage } = require("../../../src/auth/pages/LoginPage")
const { Provider } = require("react-redux");
const { configureStore } = require("@reduxjs/toolkit");
const { MemoryRouter } = require("react-router-dom");

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {

    }
})

describe('Pruebas en <LoginPage />', () => {

    test('Debe de mostrar el componente correctamente', () => { 

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

    })

    // screen.debug();
    expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);

})
