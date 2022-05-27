import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../context/authContext/auth/useAuth";
type Inputs = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};
const Register = () => {
    const { signUp } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (user: any) => {
        signUp(user);
    };
    return (
        <>
            <div className="min-h-full flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                className="h-12 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-8">
                            <div>
                                <div className="mt-6 relative">
                                    <div
                                        className="absolute inset-0 flex items-center"
                                        aria-hidden="true"
                                    >
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">
                                            continue with
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <form
                                    action="#"
                                    method="POST"
                                    className="space-y-6"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div>
                                        <label
                                            htmlFor="fullName"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Full Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="fullName"
                                                {...register("name")}
                                                type="text"
                                                value="xLog"
                                                autoComplete="fullName"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                {...register("email")}
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                {...register("password")}
                                                type="password"
                                                autoComplete="current-password"
                                                value="x-Log123456789"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="password_confirmation"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password Confirmation
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password_confirmation"
                                                {...register(
                                                    "password_confirmation"
                                                )}
                                                type="password"
                                                value="x-Log123456789"
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

Register.propTypes = {};

export default Register;
