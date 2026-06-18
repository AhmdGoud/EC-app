import { useState } from "react";

function SignIn({ onSignIn }) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    if (onSignIn) onSignIn({ email, password });
    console.log("SignIn submit:", { email });
    setValues({ email: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md rounded-2xl bg-white p-8 shadow ring-1 ring-slate-200"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
        Sign in
      </p>
      <h2 className="mt-4 text-2xl font-bold text-slate-900">Welcome back</h2>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Password</span>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Your password"
          />
        </label>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

export default SignIn;
