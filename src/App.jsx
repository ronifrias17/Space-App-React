import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
import ModalZoom from "./components/ModalZoom"
import Pie from "./components/Pie"
import GlobalContextProvider from "./context/GlobalContext"
import { FondoGradiente, AppContainer, MainContainer, ContenidoGaleria } from "./components/styledComponenApp"


const App = () => {
  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <GlobalContextProvider>
          <AppContainer>
            <Cabecera />
            <MainContainer>
              <BarraLateral />
              <ContenidoGaleria>
                <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner} />
                <Galeria />
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>
          <ModalZoom />
          <Pie />
        </GlobalContextProvider>
      </FondoGradiente>
    </>
  )
}

export default App
