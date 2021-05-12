const initialState = {
  stage: [
    "todo",
    "in_progress",
    "in_review",
    "done"
  ],
  card: [
    {
      "id": "0a9e44e1-5d8c-4fdc-8a40-8b089e823050",
      "stage": "todo",
      "title": "Make release v0.2.0"
    },
    {
      "id": "567f446e-1410-4cff-9c4f-de717e0ef2ac",
      "stage": "in_progress",
      "title": "Change docker client to subprocess client"
    },
    {
      "id": "567f446e-1410-4cff-9c4f-de717e0ef2ax",
      "stage": "in_progress",
      "title": "Change docker"
    },
    {
      "id": "29052ace-b248-42ae-9a73-2db602965673",
      "stage": "in_review",
      "title": "Change project structure to DDD"
    },
    {
      "id": "3711b659-b297-449a-86ec-c81005c9232c",
      "stage": "todo",
      "title": "Make subprocess client"
    }
  ]
};

export default initialState;