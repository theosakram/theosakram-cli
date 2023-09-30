#!/usr/bin/env node
import { readdirSync } from 'fs';
import { join } from 'path';
import { createPromptModule } from 'inquirer';
import type { Answers, QuestionCollection } from 'inquirer';
import { DIRNAME } from './constants.js';
import { createProject } from './createProject.js';

const CHOICES = readdirSync(join(DIRNAME, 'templates'));

const QUESTIONS: QuestionCollection<Answers> = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project do you want to generate?',
    choices: CHOICES,
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Give your new project a name',
    validate: (input: string) => {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) {
        return true;
      }

      return 'Project name may only include letters, numbers, underscores and hashes.';
    },
  },
];

const prompt = createPromptModule();

prompt(QUESTIONS).then((answers) => {
  const projectChoice = answers['project-choice'];
  const projectName = answers['project-name'];
  const templatesPath = join(DIRNAME, 'templates', projectChoice);

  createProject(templatesPath, projectName);
});
