import { client } from "~/api/client"

import { LegaciesDocument } from "./legacies.generated"

function getData() {
  return client.request(LegaciesDocument)
}

export default async function LegaciesIndex() {
  const { legacies } = await getData()
  return (
    <main>
      <h1>Your Legacies</h1>
      <ul>
        {legacies.map((legacy) => (
          <li key={legacy.id}>
            <a href={`/legacies/${legacy.id}`}>{legacy.name}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
