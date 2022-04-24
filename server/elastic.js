import { Client } from "@elastic/elasticsearch";

export const client = new Client({
  node: "https://52.5.49.102:9200",
  auth: {
    username: "phunghx",
    password: "phunghx",
  },
});
async function postDoc() {
  const bulkResponse = await client.bulk({
    refresh: true,
    operations: [
      { index: { _index: "nhatminh" } },
      {
        character: "some char",
        quote: "some quote.",
      },

      { index: { _index: "nhatminh" } },
      {
        character: "Targaryen",
        quote: "I am the balls of the dragon.",
      },

      { index: { _index: "nhatminh" } },
      {
        character: " Lannister",
        quote: "A mind needs books like a sword.",
      },
    ],
  });

  if (bulkResponse.errors) {
    console.log(bulkResponse);
    process.exit(1);
  }
  const response = await client.transport.request({
    method: "POST",
    path: "/nhatminh/_search",
    body: {
      query: {
        match: {
          quote: "winter",
        },
      },
    },
    querystring: {},
  });
  console.log("res", response);
}

async function getDoc() {
  const document = await client.search({
    index: "game-of-thrones",
  });

  console.log(document.hits.hits[5]);
}

async function deleteDoc() {
  const document = await client.search({
    index: "game-of-thrones",
  });

  console.log(document.hits.hits[5]);
}
