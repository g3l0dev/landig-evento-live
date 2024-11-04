import { defineConfig } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  integrations: [icon()],
});