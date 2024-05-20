const commands = [];
let commandModules = [];

function registerCommand(obj, functions) {
  const commandInfo = { ...obj };
  commandInfo.categorie = commandInfo.categorie || "General";
  commandInfo.reaction = commandInfo.reaction || "❄️";
  commandInfo.functions = functions;
  commandModules.push(commandInfo);
  return commandInfo;
}

module.exports = {
  registerCommand,
  commands,
  commandModules
};
  
