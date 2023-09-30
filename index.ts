#!/usr/bin/env node
import { readdirSync } from 'fs';
import { join } from 'path';
import { createPromptModule } from 'inquirer';
import type { Answers, QuestionCollection } from 'inquirer';
import { DIRNAME } from './constants.js';
import { createProject } from './createProject.js';

const PROJECT_CHOICES = readdirSync(join(DIRNAME, 'templates'));
const OPTIONAL_NEXT_CHAKRA_PACKAGE = [
  { name: 'Next SEO', value: 'next-seo' },
  { name: 'React Hook Form', value: 'react-hook-form' },
  { name: 'React Icons', value: 'react-icons' },
  { name: 'React Select', value: 'react-select' },
  { name: 'React Table', value: 'react-table' },
  { name: 'Zustand', value: 'zustand' },
];

const QUESTIONS: QuestionCollection<Answers> = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project do you want to generate?',
    choices: PROJECT_CHOICES,
  },
  {
    name: 'optional-install-for-next-chakra',
    type: 'checkbox',
    message: 'Will you be needing any of this?',
    choices: OPTIONAL_NEXT_CHAKRA_PACKAGE,
    when: (answer) => answer['project-choice'] === 'next-chakra',
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
