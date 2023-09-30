import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import { CURR_DIR } from './constants.js';

const SKIP_FILES = ['node_modules', '.template.json'];

export const createProject = (templatePath: string, newProjectPath: string) => {
  if (existsSync(newProjectPath)) {
    console.log(`Folder ${newProjectPath} already exists. Delete or use another name.`);
    return false;
  }

  mkdirSync(newProjectPath);

  const filesToCreate = readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const originalPath = join(templatePath, file);
    const fileStat = statSync(originalPath);
    const writePath = join(CURR_DIR, newProjectPath, file);

    if (SKIP_FILES.indexOf(file) > -1) return;

    if (fileStat.isFile()) {
      const content = readFileSync(originalPath, 'utf-8');
      if (file === '.npmignore') file = '.gitignore';

      writeFileSync(writePath, content, 'utf8');
    }

    if (fileStat.isDirectory()) {
      mkdirSync(writePath);

      createProject(join(templatePath, file), join(newProjectPath, file));
    }
  });
};
