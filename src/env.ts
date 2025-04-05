import { z as zod } from 'zod';

const envSchema = zod.object({
  NEXT_PUBLIC_API_BASE_URL: zod.string().url(),
});

const parseEnv = envSchema.safeParse(process.env);

if (!parseEnv.success) {
  // FLATTEN => vai transformar o erros da validação em uma forma mais legível
  console.error(
    'Invalid environment variables: ',
    parseEnv.error.flatten().fieldErrors
  );

  throw new Error('Invalid environment variables');
}

export const env = parseEnv.data;
