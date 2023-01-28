import { useLoginFormik } from "./useLoginFormik";
import { useAuthContext } from "@context/AuthContext/AuthContext";

import { Icon } from "@components/shared/Icon/Icon";
import { Input } from "@components/shared/Input/Input";

export const LoginForm = () => {
  const { login } = useAuthContext();

  const formik = useLoginFormik({
    onSubmit: () => login(),
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
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center mt-5"
      >
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          hasError={formik.touched.password && !!formik.errors.password}
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
  );
};
