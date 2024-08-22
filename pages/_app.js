import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme'
import {AnimatePresence} from 'framer-motion'
import "../styles/globals.scss"
import "../styles/calculator.scss"
import "../styles/game.scss"


const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website