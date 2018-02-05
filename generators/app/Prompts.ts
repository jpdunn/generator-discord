/**
 * The values that we will be prompting for.
 */
export interface Prompts {

    /**
     * The name of the project.
     */
    projectName: string;

    /**
     * The prefix for the commands.
     */
    commandPrefix: string;

    /**
     * The token the Discord bot uses to connect.
     */
    discordToken: string;

    /**
     * The name of the configuration file.
     */
    configurationFileName: string
}
