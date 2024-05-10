import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

// GET
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate('creator');

    if (!prompt) return new Response('Prompt não encontrado.', { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response('Não foi possível recuperar todos os prompts.', { status: 500 });
  }
}

// PATCH
export const PATCH = async (request, { params }) => {

  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) return new Response('Prompt não encontrado.', { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });

  } catch (error) {
    return new Response('Não foi possível editar o prompt.', { status: 500 });
  }
}

// DELETE
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id); //verificar aqui, trocar pro Remove

    return new Response('Prompt deletado com sucesso.', { status: 200 });
  } catch (error) {
    return new Response('Não foi possível deletar o prompt.', { status: 500 });
  }
}