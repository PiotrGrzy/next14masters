
import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from '@graphql-codegen/cli';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_URL,
  overwrite: true,
  documents: "src/graphql/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
          fragmentMasking: false,
        },
        config: {
          useTypeImports: true,
          enumsAsTypes: true,
          skipTypename: true,
          documentMode: "string",
          defaultScalarType: "unknown",
        },
    }
  }
};

export default config;
