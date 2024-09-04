import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { prompt, userId, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save(); //saves prompt in DB;

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
