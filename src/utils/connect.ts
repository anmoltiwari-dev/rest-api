import mongoose from 'mongoose';
import config from 'config';
import log from '../utils/logger';

async function connect () {
    const dbUri = config.get<string>('dbUri');
    try {
        await mongoose.connect(dbUri);
        log.info('Connected to db')
    } catch(err) {
        log.error('Could not connect to db')
        process.exit(1);
    }
}

export default connect;