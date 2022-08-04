const client = require("../index");

client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
        await interaction.deferUpdate().catch(null);
        if (interaction.customId === "btn-1") {
            interaction.followUp({
                content: `you clicked the Primary Button`,
                ephemeral: true,
            });
        } else if (interaction.customId === "btn-2") {
            interaction.followUp({
                content: `you clicked the secondary Button`,
                ephemeral: true,
            });
        } else if (interaction.customId === "btn-3") {
            interaction.followUp({
                content: `you clicked the Danger Button`,
                ephemeral: true,
            });
        } else if (interaction.customId === "btn-4") {
            interaction.followUp({
                content: `you clicked the Sucess Button`,
                ephemeral: true,
            });
        }
    }
})