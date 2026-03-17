import { AccountConfig } from "@/src/components/account-config/account-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Configuration | ADRO",
  description: "Configure your ADRO account by verifying your email and setting a password.",
};

export default function AccountConfigPage() {
  return <AccountConfig />;
}
