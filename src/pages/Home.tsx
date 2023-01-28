import { Icon } from "@components/shared/Icon/Icon";
import { Modal } from "@components/shared/Modal";
import { Toolbar } from "@components/shared/Toolbar";
import { useAuthContext } from "@context/AuthContext/AuthContext";
import { useUIContext } from "@context/UIContext/UIContext";
import { useState } from "react";
import "../styles/home.css";

export const Home = () => {
  const authCtx = useAuthContext();
  const { darkMode } = useUIContext();

  const [value, setValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const clickMenu = (val: number) => {
    setValue(val);
    setOpenModal(true);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="relative bg-gradient-to-b from-bgPrimaryColor  w-100 h-100 dark:from-slate-500 dark:to-slate-800">
        <Toolbar />

        <div className="buttons-wrapper">
          <button
            type="button"
            // onClick={() => clickMenu(1)}
            className="transition ease-in-out delay-150 bg-gray-300 hover:bg-gray-400 font-medium rounded-full p-5 shadow-4xl shadow-slate-500"
          >
            <Icon icon="camera" className="w-8" />
          </button>
          <button
            type="button"
            onClick={() => clickMenu(1)}
            className="transition ease-in-out delay-150 bg-gray-300 hover:bg-gray-400 font-medium rounded-full p-5 shadow-4xl shadow-slate-500"
          >
            <Icon icon="firefox-brands" className="w-8" />
          </button>
          <button
            type="button"
            onClick={() => clickMenu(2)}
            className="transition ease-in-out delay-150 bg-gray-300 hover:bg-gray-400 font-medium rounded-full p-5 shadow-4xl shadow-slate-500"
          >
            <Icon icon="newspaper" className="w-8" />
          </button>
          <button
            type="button"
            onClick={() => clickMenu(3)}
            className="transition ease-in-out delay-150 bg-gray-300 hover:bg-gray-400 font-medium rounded-full p-5 shadow-4xl shadow-slate-500"
          >
            <Icon icon="images" className="w-8" />
          </button>
        </div>

        <Modal value={value} openModal={openModal} />

        <button
          id="parent"
          type="button"
          onClick={() => authCtx.logOut()}
          className="absolute bottom-3 left-3 transition ease-in-out delay-150 bg-bgPrimaryColor hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full p-2.5 shadow-4xl shadow-slate-600"
        >
          <Icon className="w-6" icon="power-off" />
        </button>
      </div>
    </div>
  );
};
