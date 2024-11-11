import { Routes, Route } from "react-router-dom"
import HomePage from './../pages/HomePage/HomePage'
import GalleryPage from './../pages/GalleryPage/GalleryPage'
import DetailsPage from './../pages/DetailsPage/DetailsPage'

const AppRoutes = () => {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/galeria" element={<GalleryPage />} />
                <Route path="/detalles/:coasterId" element={<DetailsPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes