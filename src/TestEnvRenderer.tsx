import { CacheProvider } from '@emotion/react'
import { Fragment, ReactNode } from 'react'
import { Provider } from 'react-redux'
import Theme, { cacheRtl } from './configs/theme/MuiTheme'
import { store } from './app/store'
import "@testing-library/jest-dom/vitest"

type TestEnvRendererProps = {
    children: ReactNode
}
function TestEnvRenderer({ children }: TestEnvRendererProps) {
    return (
        <Fragment>
            <CacheProvider value={cacheRtl}>
                <Provider store={store}>
                    <Theme>
                        {children}
                    </Theme>
                </Provider>
            </CacheProvider>
        </Fragment>
    )
}

export default TestEnvRenderer