import PasswordField from "@/components/ui/password-field";

export default function PasswordFieldDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-black/5">
        <h1 className="text-xl font-bold mb-6 text-center">Password Field Demo</h1>
        <PasswordField />
      </div>
    </div>
  );
}
