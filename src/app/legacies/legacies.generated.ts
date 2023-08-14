import * as Types from "../../api/types.generated"

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"
export type LegaciesQueryVariables = Types.Exact<{ [key: string]: never }>

export type LegaciesQuery = {
  __typename?: "RootQueryType"
  legacies: Array<{
    __typename?: "Legacy"
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
  }>
}

export const LegaciesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "legacies" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "legacies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LegaciesQuery, LegaciesQueryVariables>
