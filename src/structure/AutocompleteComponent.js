class AutocompleteComponent {
    data;

    /**
     *
     * @param {{commandName: string, run: import("discord.js").Awaitable<(client: typeof(global.client), interaction: import('discord.js').AutocompleteInteraction) => void> }} structure 
     */
    constructor(structure) {
        this.data = {
            __type__: 4, // This used for the handler
            ...structure
        }
    }

    toJSON = () => {
        return { ...this.data }
    }
}

module.exports = AutocompleteComponent;
