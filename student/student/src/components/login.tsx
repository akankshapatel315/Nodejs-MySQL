import axios from "axios";
import { Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = (props: any) => {
  const { role } = props;

  const loginAPI = async (data: any) => {
    try {
      const response: any = await axios.post("http://localhost:8080/login", {
        email: data.email,
        password: data.password,
      });
      toast.success(response.data.message);
    } catch (err: any) {
      if (err.response) {
        if (err.response.status == 404) {
          toast.error(err.response.data.message);
        }
        if (err.response.status == 400) {
          toast.error(err.response.data.message);
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <section className="vh-100">
        <Formik
          validationSchema={schema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            loginAPI(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black">
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Admin login
                          </p>

                          <form
                            className="mx-1 mx-md-4"
                            onSubmit={handleSubmit}
                            noValidate
                          >
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div
                                data-mdb-input-init
                                className="m-outline flex-fill mb-0"
                              >
                                <input
                                  type="email"
                                  name="email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                  placeholder="Enter email"
                                  className="form-control"
                                />
                                <p className="error mt-2 text-danger">
                                  {errors.email &&
                                    touched.email &&
                                    errors.email}
                                </p>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div
                                data-mdb-input-init
                                className="form-outline flex-fill mb-0"
                              >
                                <input
                                  name="password"
                                  type="password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                  placeholder="Enter password"
                                  className="form-control"
                                />
                                <p className="error mt-2 text-danger">
                                  {errors.password &&
                                    touched.password &&
                                    errors.password}
                                </p>
                              </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary btn-lg"
                              >
                                Login
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            className="img-fluid"
                            alt="Sample image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Login;
