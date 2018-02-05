import * as fs from 'fs';
import { Question } from 'inquirer';
import * as path from 'path';
import * as Base from 'yeoman-generator';

import yosay = require('yosay');


import { Prompts } from './Prompts'



export class Generator extends Base {

    private properties: Prompts;
    private destinationName: string;


    /**
     * Initializes the generator.
     */
    public initialize(): void {
        this.log(yosay('Welcome to the Discord.NET project generator!'));

        this.properties = {
            projectName: 'Discord Bot',
            commandPrefix: '.',
            configurationFileName: '_configurations',
            discordToken: 'DISCORD TOKEN GOES HERE'
        }
    }


    public async prompting(): Promise<void> {
        let questions: Question[];


        questions = [
            {
                message: 'What do you want to call the project?',
                name: 'projectName',
                type: 'input',
                default: this.properties.projectName
            },
            {
                message: 'What should the command prefix be?',
                name: 'commandPrefix',
                type: 'input',
                default: this.properties.commandPrefix
            },
            {
                message: 'What should the configuration file be named?',
                name: 'configurationFileName',
                type: 'input',
                default: this.properties.configurationFileName
            },
            {
                message: 'What is the token for this bot?',
                name: 'discordToken',
                type: 'input',
                default: this.properties.discordToken
            }
        ];

        return this.prompt(questions).then((x) => {
            this.properties = (x as any);
        });
    }


    public end(): void {
        this.log();
        this.log('The files have been created successfully :)');
    }

}
