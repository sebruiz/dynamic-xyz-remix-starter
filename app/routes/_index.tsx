import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";

export default function AccountLink() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "REDACTED",
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  );
}
