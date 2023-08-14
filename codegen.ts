import type { CodegenConfig } from "@graphql-codegen/cli"

const ScalarTypes = {
  DateTime: "Date",
}

const typescriptConfig = {
  avoidOptionals: true,
  strictScalars: true,
  scalars: ScalarTypes,
}

const config: CodegenConfig = {
  schema: ["http://localhost:4000/api/graphql"],
  documents: "src/**/*.(graphql|gql)",
  generates: {
    "schema.graphql": {
      plugins: ["schema-ast"],
    },
    "src/api/types.generated.ts": {
      plugins: ["typescript"],
      config: typescriptConfig,
    },
    "src/": {
      preset: "near-operation-file",
      plugins: ["typescript-operations", "typed-document-node"],
      config: {
        ...typescriptConfig,
        gqlImport: "graphql-request#gql",
      },
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "api/types.generated.ts",
      },
    },
  },
}
export default config
