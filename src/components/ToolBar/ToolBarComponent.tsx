
import * as Toolbar from '@radix-ui/react-toolbar';
import './styles.scss';
import { MenuDrawerComponent } from '../MenuDrawer/MenuDrawerComponent';
import LOGO from '../../assets/LOGO.svg'

export const ToolBarComponent = () => {

  return (
    <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options">
      <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
        <img src={LOGO} width={150} alt="Your SVG" />
      </Toolbar.ToggleGroup>
      <Toolbar.Button className="ToolbarButton" style={{ marginLeft: 'auto' }}>
        <MenuDrawerComponent />
      </Toolbar.Button>
    </Toolbar.Root>
  );

}