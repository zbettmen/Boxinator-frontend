import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../store/store"

// ReduxWrapper is used to include redux to all the components in our testing

const ReduxWrapper = component => render(
    <Provider store={store} >
        {component}
    </Provider>
)

export default ReduxWrapper