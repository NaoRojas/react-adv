import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import { LazyPage1 } from '../components/LazyPage1'
import { LazyPage2 } from '../components/LazyPage2'
import { LazyPage3 } from '../components/LazyPage3'

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <ul>
        <li>
          <NavLink className="link-item" to="lazy1">
            Lazy Page 1
          </NavLink>
        </li>
        <li>
          <NavLink className="link-item" to="lazy2">
            Lazy Page 2
          </NavLink>
        </li>
        <li>
          <NavLink className="link-item" to="lazy3">
            Lazy Page 3
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  )
}
export default LazyLayout
