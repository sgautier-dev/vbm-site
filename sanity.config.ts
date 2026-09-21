import { createStudioConfig } from "./src/sanity/studio/config";
import { requireSanityEnvironment } from "./src/sanity/env";

export default createStudioConfig(requireSanityEnvironment());
