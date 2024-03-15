import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run challenge:serve:development',
        production: 'nx run challenge:serve:production',
      },
      ciWebServerCommand: 'nx run challenge:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
