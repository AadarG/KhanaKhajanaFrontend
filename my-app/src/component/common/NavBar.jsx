
import { Menu } from 'semantic-ui-react';
import {logoo} from '../../logo-no-background.png';
import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
      <Menu borderless fixed="top">
            <Menu.Item>
                <img src={logo} alt="KhanaKhajana" style={{ width: 150 }} />
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/landing" /> 
          <Menu.Item name="Recipes" as={Link} to="/recipes" /> 
          <Menu.Item name="Add Recipe" as={Link} to="/add-recipe" />
          <Menu.Item name="Recipe Data" as={Link} to="/recipe-data" />
        </Menu>
    )
}

export default NavBar;