const messages = [
  {origin:"MC", message:"Hello!"},
  {origin:"Shuttle", message:"Hey!"},
];


const parseTranscripts = (messages) => {
  // Code here!
  return messages.map(message => message.origin + ": " + message.message);
};

console.log(parseTranscripts(messages));