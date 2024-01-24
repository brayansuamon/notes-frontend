import { NavLink } from "react-router-dom"

type Props = {}

interface Route{
  to: string
  text: string
}
type routesHeaderProps = Route[]

const routesHeader: routesHeaderProps = [
  {
    to: '/',
    text: 'Home'
  },
]

routesHeader.push({
  to: 'form-filling',
  text: 'Form'
})

const Header = (props: Props) => {
  return (
   <nav>
    <ul>
      {routesHeader.map(route =>(
        <li>
          <NavLink
          style={({isActive})=>({
            color:isActive? 'red' : 'blue'
          })}
          to={route.to}
          >
            {route.text}
          </NavLink>
        </li>
      ))}
    </ul>
   </nav>
  )

}


export default Header
