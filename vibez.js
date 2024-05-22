const bot = require(__dirname + '/lib/vibez')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Vibez ${VERSION}`)
  try {
    await bot.init()
    bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
