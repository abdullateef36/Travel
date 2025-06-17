// types/mono-connect.d.ts

declare module "@mono.co/connect.js" {
  interface MonoConnectOptions {
    key: string;
    scope?: string;

    // ✅ Add the missing customer field
    customer?: {
      id?: string;
      name: string;
      email: string;
      identity?: {
        type: "bvn" | "nin" | "phone";
        number: string;
      };
    };

    data?: {
      type: string;
      amount?: number;
      description?: string;
    };

    onClose?: () => void;
    onLoad?: () => void;
    onSuccess?: (result: { code: string }) => void;
  }

  class MonoConnect {
    constructor(options: MonoConnectOptions);
    setup(): void;
    open(): void;
    reauthorise(accountId: string): void;
  }

  export default MonoConnect;
}
