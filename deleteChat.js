async function deleteChat()
{
    try {
        let fetched;
        do {
          fetched = await channel.messages.fetch({ limit: 100 });
          fetched.forEach(msg => msg.delete());
        } while (fetched.size >= 2);
      } catch (error) {
        console.error('Error deleting messages:', error);
      }
}