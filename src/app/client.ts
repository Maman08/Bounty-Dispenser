import { createThirdwebClient } from "thirdweb";


const clientId = '1db82c3d6bdfb840ddb6fe7adf6891db82c3d6bdfb840ddb6fe7adf689';

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
