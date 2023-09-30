import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const FILENAME = fileURLToPath(import.meta.url);
export const DIRNAME = dirname(FILENAME);
export const CURR_DIR = process.cwd();
