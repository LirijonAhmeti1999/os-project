import { toast } from "react-toastify";
import { useLoginFormik } from "./useLoginFormik";

import { useAuthContext } from "@context/AuthContext/AuthContext";
import { login } from "../../../api/auth/auth";
import { Icon } from "@components/shared/Icon/Icon";

export const LoginForm = () => {
  const authCtx = useAuthContext();

  const formik = useLoginFormik({
    async onSubmit(values, formikHelpers) {
      try {
        await login(values.password);

        toast.success("You've been logged in!");

        authCtx.login();
      } catch (error) {
        toast.error("Invalid credentials!");

        console.error(error);
      }
    },
  });

  return (
    <div className="w-1/4 md: rounded-xl p-8 md: dark:bg-slate-800">
      <img
        className="w-40 h-40 rounded-full mx-auto"
        src="src/images/avatar.jpg"
        alt=""
      />
      <p className="text-center mt-3 font-bold text-gray-600">
        Welcome Lirijon Bossi!
      </p>
      <div className="md:p-6 text-center space-y-4">
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={formik.values.password}
            onChange={formik.handleChange}
            // error={formik.touched.password && Boolean(formik.errors.password)}
          />

          <div className="mt-6">
            <button
              disabled={formik.isSubmitting}
              className="inline-flex items-center text-center w-auto text-gray-900 bg-transparent focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2"
            >
              {formik.isSubmitting ? "Logging in..." : "Unlock"}
              <Icon icon="arrow-right" className="text-dark w-3 ml-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
