import { create } from "zustand";
import { url } from "../api-url";

interface AccountConfigState {
  loading: boolean;
  error: string | null;
  otpVerified: boolean;

  // Step 1: Verify OTP
  verifyOtp: (email: string, otp: string) => Promise<void>;

  // Step 2: Set Password
  setPassword: (email: string, password: string, confirmPassword: string) => Promise<void>;

  reset: () => void;
}

export const useAccountConfigStore = create<AccountConfigState>((set, get) => ({
  loading: false,
  error: null,
  otpVerified: false,

  verifyOtp: async (email, otp) => {
    if (get().loading) return;

    set({ loading: true, error: null });
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] 🚀 Attempting OTP Validation for:`, { email, otp });

    try {
      const response = await fetch(`${url.backendUrl}/api/otp-validation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      console.log(`[${new Date().toISOString()}] 📡 Proxy Response Status:`, response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("❌ Backend Error Details:", errorData);
        throw new Error(errorData.detail || "OTP verification failed");
      }

      const data = await response.json();
      console.log("✅ Backend Success:", data);

      set({ loading: false, otpVerified: true });
    } catch (err: any) {
      set({ loading: false, error: err.message });
      throw err;
    }
  },

  setPassword: async (email, password, confirmPassword) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${url.backendUrl}/api/create-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          new_password: password,
          confirm_password: confirmPassword
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Password Creation Error Response:", errorData);
        throw new Error(errorData.detail || "Password creation failed");
      }

      const data = await response.json();
      console.log("Password Creation Success Response:", data);

      set({ loading: false });
    } catch (err: any) {
      set({ loading: false, error: err.message });
      throw err;
    }
  },

  reset: () => set({ loading: false, error: null, otpVerified: false }),
}));
