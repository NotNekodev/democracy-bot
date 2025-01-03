const Rules = require("../../utils/Rules");
const { ChatInputCommandInteraction, ApplicationCommandOptionType, AttachmentBuilder } = require("discord.js");
const ApplicationCommand = require("../../structure/ApplicationCommand");

module.exports = new ApplicationCommand({
    command: {
        name: 'send-rules',
        description: 'Sends the rule message.',
        options: []
    },
    options: {
        botDevelopers: true
    },
    /**
     * 
     * @param {typeof(global.client)} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        try {
            const embed = await Rules.create_embeds(); // Generate the embed
            await interaction.reply({ embeds: [embed] }); // Send the embed
        } catch (err) {
            console.error("Failed to generate or send rules embed:", err);
            await interaction.reply({ content: "An error occurred while generating the rules embed.", ephemeral: true });
        }
    }
}).toJSON();
