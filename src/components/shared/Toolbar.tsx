import { CurrentTime } from "@components/CurrentTime/CurrentTime";
import { Icon } from "./Icon/Icon";

export const Toolbar = () => {
  return (
    <div className="flex justify-between bg-gray-300 px-3 font-semibold">
      <p>Preferences</p>
      <div className="flex">
        <span className="flex align-middle justify-center pr-4">
          75% <Icon icon="battery-life" className="battery-life-icon pl-1" />
        </span>
        <CurrentTime />
      </div>
    </div>
  );
};
