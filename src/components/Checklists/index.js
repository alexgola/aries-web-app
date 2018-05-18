import HomeContainer from './HomeContainer'
import { injectReducer } from '../../store/reducers'

import HomeSagas from './modules/HomeSagas'
import homeReducer from './modules/HomeReducer'

export default (store) => {
  injectReducer(store, { key: 'home', reducer: homeReducer })

  store.runSaga(HomeSagas)
  store.runSaga(HeroSagas)
  store.runSaga(PickedCategoriesSagas)
  store.runSaga(SponsorSliderSagas)
  store.runSaga(ArticleGridSwitchSagas)

  return ChecklistsPageContainer
}
