import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// ----------------------------------------common----------------------------------------
// sign up
import SelectUserTypeView from './pages/signUp/SelectUserTypeView'
import TermsOfUseAgreeView from './pages/signUp/traveler/TermsOfUseAgreeView'
import TermsOfUseView from './pages/signUp/traveler/TermsOfUseView'
import IdentityVerificationView from './pages/signUp/traveler/IdentityVerificationView'
import SignUpCompleteView from './pages/signUp/SignUpCompleteView'
import TravelerTypeSignUpRouter from './pages/signUp/traveler/TravelerTypeSignUpRouter'
// sign in
import SignInView from './pages/signIn/SignInView'
// ----------------------------------------traveler----------------------------------------
// home
import TravelerHomeView from './pages/home/traveler/TravelerHomeView'
import SearchResultView from './pages/home/traveler/SearchResultView'
// course
import TravelCourseListView from './pages/course/TravelCourseListView'
import TravelCourseView from './pages/course/TravelCourseView'
// magazine
import MagazineHomeView from './pages/magazine/traveler/MagazineHomeView'
import MagazineListView from './pages/magazine/traveler/MagazineListView'
import MagazineSearchView from './pages/magazine/traveler/MagazineSearchView'
import MagazineSearchResultView from './pages/magazine/traveler/MagazineSearchResultView'
import TravelSpotView from './pages/course/TravelSpotView'
// ----------------------------------------guide----------------------------------------
// home
import GuideHomeView from './pages/home/guide/GuideHomeView'
// myguide
import MyGuideView from './pages/myguide/MyGuideView'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signup/*" element={<TravelerTypeSignUpRouter />} />
      <Route path="/signup/complete" element={<SignUpCompleteView />} />
      <Route path="/signin" element={<SignInView />} />
      {/* guide 일 경우 */}
      <Route path="/" element={<GuideHomeView />} />
      <Route path="/myguide" element={<MyGuideView />} />
      {/* traveler 일 경우 */}
      <Route path="/" element={<TravelerHomeView />} />
      <Route path="/search" element={<SearchResultView />} />
      <Route path="/course/all" element={<TravelCourseListView />} />
      <Route path="/course/:postId" element={<TravelCourseView />} />
      <Route path="/magazine" element={<MagazineHomeView />} />
      <Route path="/magazine/all" element={<MagazineListView />} />
      <Route path="/magazine/:postId" element={<TravelSpotView />} />
      <Route path="/magazine/search" element={<MagazineSearchView />} />
      <Route path="/magazine/search" element={<MagazineSearchResultView />} />
    </Routes>
  </BrowserRouter>
)
export default Router
