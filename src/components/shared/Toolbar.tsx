import { CurrentTime } from "@components/CurrentTime/CurrentTime";
import { Icon } from "./Icon/Icon";
import { Switch } from "@headlessui/react";

import { useUIContext } from "@context/UIContext/UIContext";

export const Toolbar = () => {
  const { darkMode, toggleDarkMode } = useUIContext();

  return (
    <div className="flex justify-between bg-gray-300 px-3 font-semibold">
      <p>Preferences</p>
      <div>
        <Switch.Group>
          <Switch.Label className="mr-4">Dark Mode</Switch.Label>

          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            className={`${
              darkMode ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                darkMode ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </Switch.Group>
      </div>

      <div className="flex">
        <span className="flex align-middle justify-center pr-4">
          75% <Icon icon="battery-life" className="battery-life-icon pl-1" />
        </span>
        <CurrentTime />
      </div>
    </div>
  );
};
