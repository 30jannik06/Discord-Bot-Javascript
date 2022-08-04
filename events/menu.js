const client = require("../index")

client.on("interactionCreate", async (interaction) => {
    if (interaction.isSelectMenu()) {
        await interaction.deferUpdate().catch(null)
        if (interaction.customId === "menu-1") {
            const value = interaction.values[0];
            switch (value) {
                case "opt-1":
                    {
                        await interaction.followUp({
                            content: "You clicked on Option 1",
                            ephemeral: true,
                        });
                    }
                    break;
                case "opt-2":
                    {
                        await interaction.followUp({
                            content: "You Clicked on option 2",
                            ephemeral: true,
                        });
                    }
                    break;

                default:
                    break;
            }
        }
    }
})