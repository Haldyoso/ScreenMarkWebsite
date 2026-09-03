import { startStaticServer } from "./static-server.mjs";

export default async function globalSetup() {
  const server = await startStaticServer();

  return async () => {
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  };
}

